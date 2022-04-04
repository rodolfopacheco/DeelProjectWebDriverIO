import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';

Given(/^I Login to Deel Page$/, async () => {
    await LoginPage.open();
    await LoginPage.login();
});