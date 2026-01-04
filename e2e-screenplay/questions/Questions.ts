import { Page } from "@playwright/test";

export class Text{
    static async from(page: Page, selector: string): Promise<string> {
        return await page.textContent(selector) || '';
    

    }
}

export class Ensure{
    static that(page: Page): ProductsContainer {
        return new ProductsContainer(page);
    }
}

export class ProductsContainer {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async containsText(expectedText: string, target: string): Promise<boolean> {
        const text = await Text.from(this.page, target);
        return text.includes(expectedText);
    }
}