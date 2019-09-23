import { parseNumberString, parseUnit } from './util/strings';
import { ParseError } from './util/ParseError';

interface Ingredient {
    id: string;
    name: string;
    unit: string;
    amount: number;
    prep_type: string;
}

export class Recipe {
    public name: string;
    public url: string;
    private ingrs: Ingredient[];
    private time: {
        cook?: number,
        prep?: number,
        active?: number,
        passive?: number,
        total?: number,
    };

    public addIngredient(text: string) {

        const ingr: Ingredient = {
            id: null,
            name: null,
            unit: null,
            amount: null,
            prep_type: null
        };

        console.log(text);
        const match = text.match(/(\S+)\s+(\w[^,]*)(,\s+(\S.*))?/);
        if (! match) {
            throw new ParseError(`cannot parse ingredient "${text}"`);
        }

        ingr.amount = parseNumberString(match[1]);
        [ ingr.id, ingr.unit, ingr.name ] = parseUnit(match[2]);
        ingr.prep_type = match[4] || null;
        
        console.log(ingr);

        this.ingrs.push(ingr);
    }
}
