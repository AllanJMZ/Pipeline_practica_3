import { Page, expect } from "@playwright/test";

export class PlaceOrder{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async userDataOrder(first_name: string, last_name: string, zip_code: string){
        await this.page.fill('[data-test="firstName"]', first_name);
        await this.page.fill('[data-test="lastName"]', last_name);
        await this.page.fill('[data-test="postalCode"]', zip_code);
        await this.page.click('[data-test="continue"]');
        }

    async finishOrder(){
        await this.page.click('[data-test="finish"]');
    }

    async checkoutComplete(){
        await expect(this.page.locator('[data-test="title"]')).toBeVisible();
        await expect(this.page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
        await expect(this.page.locator('[data-test="complete-text"]')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await expect(this.page.locator('[data-test="back-to-products"]')).toBeVisible();
        await expect(this.page.locator('[data-test="back-to-products"]')).toContainText('Back Home');
        await this.page.click('[data-test="back-to-products"]');
    }


}

