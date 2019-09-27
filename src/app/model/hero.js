"use strict";
/**
 *
 * @export
 * @class Hero
 */
var Hero = (function () {
    function Hero() {
        this.id = -1;
        this.name = '';
    }
    Hero.get = function () {
        var hero = new Hero();
        hero.name = "Mr. Nice";
        return hero;
    };
    return Hero;
}());
exports.Hero = Hero;
