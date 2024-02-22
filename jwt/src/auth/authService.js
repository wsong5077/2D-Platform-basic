// authService.js
//import * as Amplify from 'aws-amplify';
//import { Auth } from 'aws-amplify';
//import Auth from '@aws-amplify/auth';
//import { fetchAuthSession } from 'aws-amplify/auth'

import { Amplify } from 'aws-amplify';

export async function signInAndGetTokens(username, password) {
    //const authToken = (await fetchAuthSession()).tokens?.idToken?.toString();
    //console.log(authToken);
    //return authToken;
    //if (!Amplify.Auth || typeof Amplify.Auth.signIn !== 'function') {
   //     throw new Error('No Auth module found, please ensure @aws-amplify/auth is imported');
   // }
    try {
        //const { Auth } = Amplify;
        console.log('signing in');
        const user = await Amplify.Auth.signIn(username, password);
        const idToken = user.signInUserSession.idToken.jwtToken;
        const accessToken = user.signInUserSession.accessToken.jwtToken;
        return { idToken, accessToken };
    } catch (error) {
        console.error('Error signing in', error);
        throw error;
    }
}
