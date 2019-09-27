// tslint:disable-next-line:no-implicit-dependencies

/**
 * Class Settings holds information required by the application.
 * Settings uses settings.json to persist relevant information across sessions.
 *
 * @export
 * @class Settings
 */
export class Settings {
    /** Determines if database location can be set by user (false), or is fixed by application (true). */
    /**
     * Sets database location when hasFixedDbLocation === true.
     * For valid values see https://github.com/electron/electron/blob/master/docs/api/app.md#appgetpathname.
     */

    /**
     * Settings.initialize must be called at startup of application and determines the locations of database
     *
     * @static
     * @memberof Settings
     */
    public static initialize(): void {

    }

}
