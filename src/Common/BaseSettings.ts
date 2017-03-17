import { VersionPathSettings } from './VersionPathSettings';
/**
 * A common settings base-class for the descending Autocomplete, Categorize and Find settings classes.
 * 
 * @param TDataType Defines the data-type that the descendant settings-class needs to return on lookups.
 */
export abstract class BaseSettings<TDataType> extends VersionPathSettings {

    /** 
     * Whether or not this setting-feature is enabled or not.
     */
    public enabled?: boolean = true;
    
    /**
     * A notifier method that is called just before the fetch operation is started. When the request 
     * is finished either cbSuccess or cbError will be called to indicate success or failure. 
     * This callback is typically used for setting loading indicators and/or debugging purposes.
     * 
     * Note: If the callback returns false then the fetch operation is skipped. This can then be used 
     * to conditionally drop requests from being made.
     * 
     * @param url - This is the url that is/was fetched. Good for debugging purposes.
     * @param reqInit - This is the RequestInit object that was used for the fetch operation.
     */
    public cbRequest?: (url?: string, reqInit?: RequestInit) => boolean = undefined;

    /**
     * A notifier method to call whenever the lookup fails.
     * @param error - An error object as given by the fetch operation.
     */
    public cbError?: (error?: any) => void = undefined;

    /**
     * A notifier method to call whenever the lookup results have been received.
     * @param data - The lookup results.
     */
    public cbSuccess?: (data?: TDataType) => void = undefined;

    constructor(settings?: BaseSettings<TDataType>) {
        super(settings);
        Object.assign(this, settings);
    }

}
