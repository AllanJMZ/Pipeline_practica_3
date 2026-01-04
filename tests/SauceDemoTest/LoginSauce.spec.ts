import { test, expect } from '@playwright/test';
import { Actor } from '../../e2e-screenplay/actors/Actor';
import { OpenApp, Login } from '../../e2e-screenplay/tasks/Tasks';

// Login
test('Login exitoso', async ({ page }) => {
    const actor = Actor.named('User', page);
    //When
    await actor.attemptsTo(
        OpenApp.at('https://www.saucedemo.com/'),
        Login.withCredentials('standard_user', 'secret_sauce')
    );
    //Then
    await expect(page.getByText('Swag Labs')).toBeVisible();
});

test('Login con error en usuario', async ({ page }) => {
    const actor = Actor.named('User', page);
    //When
    await actor.attemptsTo(
        OpenApp.at('https://www.saucedemo.com/'),
        Login.withCredentials('usuario_invalido', 'secret_sauce')
    );
    //Then
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});

test('Login con error en password', async ({ page }) => {
    const actor = Actor.named('User', page);
    //When
    await actor.attemptsTo(
        OpenApp.at('https://www.saucedemo.com/'),
        Login.withCredentials('standard_user', 'clave_invalida')
    );
    //Then
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});
