import { Page, test } from '@playwright/test';
import { ShopUi } from '../ui/shopUi';

export class AddToCart {
    static item(itemName: string) {
        return new AddToCart(itemName);
    }
    constructor(private itemName: string) {}
    async performAs(actor: any) {
        await test.step(`Agregar al carrito: ${this.itemName}`, async () => {
            const page = actor.getPage();
            await page.click(ShopUi.SHOP_PAGE.ADD_TO_CART_BUTTON(this.itemName));
        });
    }
}

export class GoToCart {
    static view() { return new GoToCart(); }
    async performAs(actor: any) {
        await test.step('Ir al carrito de compras', async () => {
            const page = actor.getPage();
            await page.click(ShopUi.SHOP_PAGE.CART_LINK);
        });
    }
}

export class Checkout {
    static start() { return new Checkout(); }
    async performAs(actor: any) {
        await test.step('Iniciar proceso de Checkout', async () => {
            const page = actor.getPage();
            await page.click(ShopUi.SHOP_PAGE.CHECKOUT_BUTTON);
        });
    }
}

export class FillOrder {
    static with(firstName: string, lastName: string, zip: string) {
        return new FillOrder(firstName, lastName, zip);
    }
    constructor(private f: string, private l: string, private z: string) {}
    async performAs(actor: any) {
        await test.step(`Llenar formulario de orden con: ${this.f} ${this.l}`, async () => {
            const page = actor.getPage();
            await page.fill(ShopUi.SHOP_PAGE.FIRST_NAME, this.f);
            await page.fill(ShopUi.SHOP_PAGE.LAST_NAME, this.l);
            await page.fill(ShopUi.SHOP_PAGE.ZIP_CODE, this.z);
            await page.click(ShopUi.SHOP_PAGE.CONTINUE_BUTTON);
        });
    }
}

export class FinishOrder {
    static now() { return new FinishOrder(); }
    async performAs(actor: any) {
        await test.step('Finalizar la orden', async () => {
            const page = actor.getPage();
            await page.click(ShopUi.SHOP_PAGE.FINISH_BUTTON);
        });
    }
}