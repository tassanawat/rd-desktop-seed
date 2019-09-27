"use strict";
require('reflect-metadata');
var hero_1 = require('./hero');
describe('Hero', function () {
    // Using globs for sharing variables because using "this" for shared variables makes typescript compiler throw noImplicitAny errors
    var globals = {
        hero: new hero_1.Hero(),
        heroId: 11,
        name: 'Mr. Nice',
        count: 5,
        newName: 'a silly name',
    };
    it('getHero()', function () {
        expect(hero_1.Hero.get().name).toBe(globals.name);
    });
});
