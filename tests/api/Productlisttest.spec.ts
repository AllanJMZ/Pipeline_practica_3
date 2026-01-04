import { test, expect } from "@playwright/test";

test('Listado de productos', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products');
    const responseBody = await response.json();

    console.log(responseBody);

    expect(response.status()).toBe(200);


});

test('Listado de categorias', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products/categories');
    const responseBody = await response.json();

    console.log(responseBody);

    expect(response.status()).toBe(200);




});