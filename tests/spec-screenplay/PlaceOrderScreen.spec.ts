import { test, expect } from '@playwright/test';
import { Actor } from '../../e2e-screenplay/actors/Actor';
import { OpenApp, Login } from '../../e2e-screenplay/tasks/Tasks';
import { AddToCart, GoToCart, Checkout, FillOrder, FinishOrder } from '../../e2e-screenplay/tasks/shopTasks';
import { ShopUi } from '../../e2e-screenplay/ui/shopUi';

test.describe('Place Order feature', () => {
    test('Should place an order successfully', async ({ page }) => {
        const actor = Actor.named('User', page);

        //Given
        await actor.attemptsTo(
            OpenApp.at('https://www.saucedemo.com/'),
            Login.withCredentials('standard_user', 'secret_sauce')
        );

        //When
        await actor.attemptsTo(
            AddToCart.item('sauce-labs-backpack'),
            GoToCart.view(),
            Checkout.start(),
            FillOrder.with('Alfredo', 'Adame', '12345'),
            FinishOrder.now()
        );

        //Then
        await expect(page.locator(ShopUi.SHOP_PAGE.COMPLETE_HEADER)).toContainText('Thank you for your order!');
    });
});
