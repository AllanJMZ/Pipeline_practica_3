import {test, expect} from '@playwright/test';
import { Actor } from '../../e2e-screenplay/actors/Actor';
import { OpenApp, Login } from '../../e2e-screenplay/tasks/Tasks';
import { Ensure } from '../../e2e-screenplay/questions/Questions';
import { LoginUi } from '../../e2e-screenplay/ui/LoginUi';

test.describe('Login feature', () => {
    test('Should Login successfully with valid credentials', async ({page}) => {
        //Given
        const actor = Actor.named('Samanta', page);
        const url = 'https://www.saucedemo.com/';
        const username = 'standard_user';
        const password = 'secret_sauce';

        //When
        await actor.attemptsTo(
            OpenApp.at(url),
            Login.withCredentials(username, password)
        );
        
        //Then
        const isProductVisible = await Ensure.that(page).containsText('Products', LoginUi.LOGIN_PAGE.PRODUCT_TITLE);
        expect(isProductVisible).toBeTruthy();

    });
});