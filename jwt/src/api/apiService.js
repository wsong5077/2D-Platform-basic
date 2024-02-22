import { signInAndGetTokens } from '../auth/authService.js'; 


export async function callApi(endpoint, username, password) {
    const { idToken } = await signInAndGetTokens(username, password);

    const response = await fetch(endpoint, {
        headers: {
            Authorization: idToken
        }
    });

    return response.json();
}

export default { callApi };
