import { test } from '@playwright/test';
import { LoginPage } from '../../e2e_Sauce-design/pages/LoginPage';
import { CartPage } from '../../e2e_Sauce-design/pages/CartPage';
import { CartActions } from '../../e2e_Sauce-design/actions/cartActions';


test('Agregar al carrito', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
    

    // Instanciar CartPage y usar sus métodos
    const cartPage = new CartPage(page);
    await cartPage.addToCart("sauce-labs-backpack");

    const cartActions = new CartActions(page);
    await cartActions.goToCart();

    //ver carrito y detalles
    await cartPage.validateItemInCart("sauce-labs-backpack", "Sauce Labs Backpack");
});