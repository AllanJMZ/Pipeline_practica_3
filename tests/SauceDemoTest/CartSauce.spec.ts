import { test, expect } from '@playwright/test';
import { Actor } from '../../e2e-screenplay/actors/Actor';
import { OpenApp, Login } from '../../e2e-screenplay/tasks/Tasks';
import { AddToCart, GoToCart } from '../../e2e-screenplay/tasks/shopTasks';


test('Agregar al carrito', async ({ page }) => {
    const actor = Actor.named('User', page);

    //When
    await actor.attemptsTo(
        OpenApp.at('https://www.saucedemo.com/'),
        Login.withCredentials('standard_user', 'secret_sauce'),
        AddToCart.item('sauce-labs-backpack'),
        GoToCart.view()
    );

    //Then
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
});