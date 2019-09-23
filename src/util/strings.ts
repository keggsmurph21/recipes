import { ParseError } from './ParseError';

export function parseNumberString(str: string): number {
    const dec = str
        .replace(/¼/g, '.25')
        .replace(/⅓/g, (1/3).toString())
        .replace(/½/g, '.5')
        .replace(/⅔/g, (2/3).toString())
        .replace(/¾/g, '.75');

    const num = parseFloat(dec);

    if (isNaN(num)) {
        throw new ParseError(`cannot parse number "${str}"`);
    }

    return num;
}

const UNITS: Map<string, Set<string>> = new Map([
    [ 'tsp',  new Set([ 'tsp', 'tsps', 'teaspoon', 'teaspoons' ]) ],
    [ 'tbsp', new Set([ 'tbsp', 'tsbsps', 'tablespoon', 'tablespoons' ]) ],
    [ 'cup',  new Set([ 'cup', 'cups' ]) ],
    [ 'oz',   new Set([ 'oz', 'ozs', 'ounce', 'ounces' ]) ],
    [ 'lb',   new Set([ 'lb', 'lbs', 'pound', 'pounds' ]) ],
    [ 'g',    new Set([ 'g', 'gs', 'gram', 'grams' ]) ],
]);

export function parseUnit(str: string): [string | null, string] {
    const match = str.match(/^(\w+)(\s+(.*))?$/);
    if (! match) {
        throw new ParseError(`cannot parse unit "${str}"`);
    }

    let unit = null;

    UNITS.forEach( (names, key) => {
        if (names.has(match[1])) {
            unit = key;
        }
    });

    const name = unit ? match[3] : str;
    return [ undefined, unit, name ];
}
