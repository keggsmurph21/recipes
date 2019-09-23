import * as cheerio from 'cheerio';
import { Parser } from './Parser';
import { Recipe } from '../Recipe';

export class MaangchiParser extends Parser {
    public extract($: CheerioStatic) {

        const recipe = new Recipe();

        $('body').find('h4 ~ ul > li').each( (i, li) => {

            const ingredient = $(li);
            recipe.addIngredient(ingredient.text());

        });

        return recipe;

    }
}
