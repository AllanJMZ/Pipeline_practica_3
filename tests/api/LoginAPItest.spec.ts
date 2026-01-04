import {test, expect} from '@playwright/test';

test('Login de usuario -200 OK', async ({request}) => {
    const response = await request.post('https://dummyjson.com/user/login', {
    
        data: {
            "username": "emilys",
            "password": "emilyspass",
            "expiresInMins": 30 // optional, defaults to 60
        }
    });

    const responseBody = await response.json();
    console.log(responseBody);

    expect(response.status()).toBe(200);
});
