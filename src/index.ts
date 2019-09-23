import * as cheerio from 'cheerio';
import * as request from 'request';
import { MaangchiParser } from './parsers/MaangchiParser';
import { Recipe } from './Recipe';

// tslint:disable:no-console

const p = new MaangchiParser();

const ingrs = `\
3 tablespoons vegetable oil
4 garlic, minced
1 teaspoon peeled ginger, minced
8 ounces pork shoulder (or chicken or beef), cut into ½ inch cubes
1 teaspoon salt
½ teaspoon ground black pepper
1 tablespoon hot pepper flakes (gochugaru)
1 medium onion (about 1 cup), cut into ½ inch chunks
2 mild green chili peppers (or ½ of green bell pepper), chopped
8 green onions, cut into ½ inch pieces
1¼ cup unsalted chicken or beef stock (or vegetable stock)
2 tablespoons hot pepper paste
1 tablespoon soy sauce
1 pound tofu, cut into ½ inch cubes
1 tablespoon potato starch
1 teaspoon sesame oil`;

const r = new Recipe();
ingrs.split('\n').forEach(ingr => r.addIngredient(ingr));

/*
request.get('https://www.maangchi.com/recipe/korean-style-mapo-tofu', (err, res, body) => {
    if (err) throw err;

    const $ = cheerio.load(body);
    console.log(p.extract($));

});
*/
