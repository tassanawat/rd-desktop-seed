import { Component } from '@angular/core';

// tslint:disable-next-line:no-implicit-dependencies
import { Menu, MenuItemConstructorOptions, remote } from 'electron';

import { Hero } from './model/hero';
import { Settings } from './model/settings';

// Importing style.scss allows webpack to bundle stylesheet with application
import '../assets/sass/style.scss';

@Component({
    selector: 'cpn-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    public heroes: Hero[];

    constructor() {
        Settings.initialize();
    }

    public onRestoreDb() {
        console.log("On Restore Db....")
    }

    public getHeroes() {
    }

    public onMenu(hero: Hero) {
        const menu = this.initMenu(hero);
        menu.popup({});
    }

    private initMenu(hero: Hero): Menu {
        const template: MenuItemConstructorOptions[] = [
            {
                label: `Delete ${hero.name}`,
            },
        ];

        return remote.Menu.buildFromTemplate(template);
    }
}
