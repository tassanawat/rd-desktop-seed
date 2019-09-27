"use strict";
var core_1 = require('@angular/core');
// tslint:disable-next-line:no-implicit-dependencies
var electron_1 = require('electron');
var settings_1 = require('./model/settings');
// Importing style.scss allows webpack to bundle stylesheet with application
require('../assets/sass/style.scss');
var AppComponent = (function () {
    function AppComponent() {
        settings_1.Settings.initialize();
    }
    AppComponent.prototype.onRestoreDb = function () {
        console.log("On Restore Db....");
    };
    AppComponent.prototype.getHeroes = function () {
    };
    AppComponent.prototype.onMenu = function (hero) {
        var menu = this.initMenu(hero);
        menu.popup({});
    };
    AppComponent.prototype.initMenu = function (hero) {
        var template = [
            {
                label: "Delete " + hero.name
            },
        ];
        return electron_1.remote.Menu.buildFromTemplate(template);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'cpn-app',
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map