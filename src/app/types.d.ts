// Typedefs grabbed and edited from DefinitelyTyped

// Type definitions for Angular JS 1.5
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface IHttpPromiseCallback<T> {
    (data: T, status: number, headers: any, config: any): void;
}

export interface IHttpPromiseCallbackArg<T> {
    data?: T;
    status?: number;
    headers?: any;
    config?: any;
    statusText?: string;
}

export interface IHttpPromise<T> extends Promise<IHttpPromiseCallbackArg<T>> {
    /**
     * The $http legacy promise methods success and error have been deprecated. Use the standard then method instead.
     * If $httpProvider.useLegacyPromiseExtensions is set to false then these methods will throw $http/legacy error.
     * @deprecated
     */
    success?(callback: IHttpPromiseCallback<T>): IHttpPromise<T>;
    /**
     * The $http legacy promise methods success and error have been deprecated. Use the standard then method instead.
     * If $httpProvider.useLegacyPromiseExtensions is set to false then these methods will throw $http/legacy error.
     * @deprecated
     */
    error?(callback: IHttpPromiseCallback<any>): IHttpPromise<T>;
}

export interface IHttpService {
    get<T>(url: string, config?: any): IHttpPromise<T>;
}