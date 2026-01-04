export class ShopUi {
    static readonly SHOP_PAGE = {
        ADD_TO_CART_BUTTON: (item: string) => `[data-test="add-to-cart-${item}"]`,
        CART_LINK: '[data-test="shopping-cart-link"]',
        CHECKOUT_BUTTON: '[data-test="checkout"]',
        FIRST_NAME: '[data-test="firstName"]',
        LAST_NAME: '[data-test="lastName"]',
        ZIP_CODE: '[data-test="postalCode"]',
        CONTINUE_BUTTON: '[data-test="continue"]',
        FINISH_BUTTON: '[data-test="finish"]',
        COMPLETE_HEADER: '[data-test="complete-header"]'
    }
}