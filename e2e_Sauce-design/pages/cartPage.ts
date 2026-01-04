import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addToCart(item: string) {
        await this.page.locator(`[data-test="add-to-cart-${item}"]`).click();
    }

    async validateItemInCart(itemId: string, itemName: string) {
        await expect(this.page.locator('[data-test="title"]')).toContainText('Your Cart');
        await expect(this.page.locator('[data-test="inventory-item-name"]')).toContainText(itemName);
        await expect(this.page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
        await expect(this.page.getByRole('link', { name: itemName })).toBeVisible();
        await expect(this.page.locator(`[data-test="remove-${itemId}"]`)).toBeVisible();
        await expect(this.page.locator('[data-test="continue-shopping"]')).toBeVisible();
        await expect(this.page.locator('[data-test="checkout"]')).toBeVisible();
        await expect(this.page.locator('[data-test="item-quantity"]')).toBeVisible();
    }
}