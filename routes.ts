/** 
 *  An array of routes that is accessible to the public
 *  These routes do not require authentication
 *  @type {string[]}
*/

export const publicRoutes: string[] = [
    "/"
]


/** 
 *  An array of routes that is protected and not accessible to the public
 *  These routes will redirect user to /settings
 *  @type {string[]}
*/

export const authRoutes: string[] = [
    "/auth/login",
    "/auth/register"
]



/** 
 *  An prefix for api authentication routes
 *  Routes that start with this prefix are used for API authentication purposes
 *  @type {string}
*/

export const apitAuthPrefix: string = "/api/auth";


/**
 * The default redirect path aftere logging In
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT: string = "/settings";