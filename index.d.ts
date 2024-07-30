declare module 'moecounter.js' {
    export interface SvgResult {
        /**
         * The URL to the generated image of the counter.
         * @example `https://api.sefinek.net/api/v2/moecounter?number=0123456789&length=10&theme=default`
         */
        url: string;

        /**
         * The SVG code of the generated counter.
         */
        svg?: string;
    }


    export interface LocalDbOptions {
        /**
         * The number to be displayed on the counter. Required.
         * @default 1234567890
         */
        number: number;

        /**
         * The number of `moe characters` on the counter. If the digit exceeds a certain size, the character limit will not apply. Optional.
         * @default 10
         */
        length?: number;

        /**
         * The graphic theme of the counter (optional). Allows customization of the counter's appearance to match the style of the page.
         * @default `default`
         */
        theme?: string;

        /**
         * Whether the graphic should be pixelated (optional). Allows a choice between smoothed and pixelated graphics. The recommended value is true.
         * @default true
         */
        pixelated?: boolean;

        /**
         * Should the module retrieve the moe counter in SVG format? Carefully evaluate whether this is necessary for your application/project. If not, this option should be set to false. Enabling this feature by setting it to true can negatively impact performance due to the associated server request.
         * @default false
         */
        svg?: boolean;
    }

    /**
     * An asynchronous function generating a Moe counter, intended for use with a local database. Enables the user to store numbers in their database.
     * @example
     * await moecounter.local({
     *     number: 1234567890,
     *     length: 10,
     *     theme: 'default',
     *     pixelated: true
     * });
     * @param options Counter options, including the number to be displayed.
     * @returns A Promise object that resolves to an SvgResult object containing the SVG code and the URL of the generated counter image.
     */
    export function local(options: LocalDbOptions): Promise<SvgResult>;


    export interface RemoteDbOptions {
        /**
         * The unique name of the counter.
         */
        name: string;

        /**
         * The number of `moe characters` on the counter. If the digit exceeds a certain size, the character limit will not apply. Optional.
         * @default 10
         */
        length?: number;

        /**
         * The number of `moe characters` on the counter. If the digit exceeds a certain size, the character limit will not apply. Optional.
         * @default `default`
         */
        theme?: string;

        /**
         * Should the module retrieve the moe counter in SVG format? Carefully evaluate whether this is necessary for your application/project. If not, this option should be set to false. Enabling this feature by setting it to true can negatively impact performance due to the associated server request.
         * @default false
         */
        svg?: boolean;
    }

    /**
     * An asynchronous function generating a Moe counter, using a remote database to manage counters. Numbers are stored in an external database.
     * @example
     * await moecounter.remote({
     *     name: 'test-12345',
     *     length: 10,
     *     theme: 'default',
     *     pixelated: true
     * });
     * @param options Options, including the unique name of the counter.
     * @returns A Promise object that resolves to an SvgResult object containing the SVG code and the URL of the generated counter image. To increment the number in the database, the user must visit the generated link.
     */
    export function remote(options: RemoteDbOptions): Promise<SvgResult>;


    /**
     * The version of the `moecounter.js` module.
     */
    export const version: string;
}