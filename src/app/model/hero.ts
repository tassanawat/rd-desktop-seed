/**
 *
 * @export
 * @class Hero
 */
export class Hero {
    public id = -1;
    public name = '';

    public static get(): Hero {
        var hero = new Hero();
        hero.name = "Mr. Nice";
        return hero;
    }
}
