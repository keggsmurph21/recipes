import * as cheerio from 'cheerio';
import { Recipe } from '../Recipe';

export abstract class Parser {
    public readonly domain: string;
    constructor() {
        this.domain = null;
    }
    public abstract extract(body: CheerioStatic): Recipe | number; // TODO remove
}

