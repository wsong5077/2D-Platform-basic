// app.js     

import { callApi } from './api/apiService.js';

async function main() {
    const endpoint = 'https://1qajdtdqj3.execute-api.us-west-2.amazonaws.com/prod';
    const username = 'ws2694@columbia.edu';
    const password = 'Aliciasong624!';

    try {
        const data = await callApi(endpoint, username, password);
        console.log('API response:', data);
    } catch (error) {
        console.error('API call failed:', error);
    }
}

main();
