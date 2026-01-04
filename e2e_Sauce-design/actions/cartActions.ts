import { Page, Locator } from "@playwright/test";
import { CartPage } from '../../e2e_Sauce-design/pages/CartPage';

export class CartActions {
    private page: Page;
    private cartLink: Locator;
    
    constructor(page: Page) {
      this.page = page;
      this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    

    }
    async goToCart() {
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }
    
}

    
