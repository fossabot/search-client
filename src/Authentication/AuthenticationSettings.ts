import * as deepmerge from 'deepmerge';

import { Setting } from '../Common';

import { AuthenticationTrigger } from './AuthenticationTrigger';

/**
 * These are all the settings that can affect the use of jwt authentication in the search-client.
 */
export class AuthenticationSettings extends Setting {

    /**
     * Creates an AuthenticationSettings object for you, based on AuthenticationSettings defaults and the overrides provided as a param.
     * @param authenticationSettings - The settings defined here will override the default AuthenticationSettings.
     */
    public static new(authenticationSettings?: AuthenticationSettings) {
        return deepmerge(new AuthenticationSettings(), authenticationSettings || {}, {clone: true}) as AuthenticationSettings;
    }

    /**
     * A notifier method to call whenever the auth-token has been fetched.
     * Note: Use of this is optional and will not affect the SearchClient operations.
     */
    public callback: (response: any) => void = undefined;

    /**
     * This is the path to the value returned by the authentication-call.
     * Should be a name-based lookup array, pointing to where the resulting auth-token is to be found.
     */
    public tokenPath: string[] = ["jwtToken"];

    /**
     * This is the token, if you need to set an initial value (i.e. if you already have the token)
     */
    public token: string;

    /**
     * The trigger-settings for when a new auth-token is to be reqeusted.
     */
    public trigger: AuthenticationTrigger = new AuthenticationTrigger();

    /**
     * The endpoint to do authentication lookups on.
     */
    public url: string = '/auth/token';
}