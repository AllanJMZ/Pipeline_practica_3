import { Page } from '@playwright/test';
import { TestData } from '../utils/testData';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(username = TestData.USERNAME, password = TestData.PASSWORD) {
        await this.page.goto(TestData.URL);
        await this.page.fill('[data-test="username"]', username);
        await this.page.fill('[data-test="password"]', password);
        await this.page.click('[data-test="login-button"]');
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
    }

}
