"use strict";
require('reflect-metadata');

import { Hero } from './hero';

interface IGlobals {
    hero: Hero;
    heroId: number;
    name: string;
    count: number;
    newName: string;
}

describe('Hero', () => {
    // Using globs for sharing variables because using "this" for shared variables makes typescript compiler throw noImplicitAny errors
    const globals: IGlobals = {
        hero: new Hero(),
        heroId: 11,
        name: 'Mr. Nice',
        count: 5,
        newName: 'a silly name',
    };

    it('getHero()', () => {
        expect(Hero.get().name).toBe(globals.name);
    });
});
