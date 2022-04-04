import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/HomePage';
import ContractsPage from '../pageobjects/ContractsPage';

When(/^I Select Fixed Rate Contract Option$/, async () => {
    await HomePage.clickAcceptCookiesBtn();
    await HomePage.closeTipsModal();
    await HomePage.clickCreateContractMenu();
    await ContractsPage.clickFixedRateBtn();
});

Then(/^I Add a Fix Contract$/, async () => {
    await ContractsPage.selectContractorStartDate();
    await ContractsPage.enterContractName();
    await ContractsPage.selectContractorTaxRes("United States");
    await ContractsPage.selectContractorTaxState("Colorado");
    await ContractsPage.selectJobTitle("Accountant");
    await ContractsPage.selectSeniorityLevel("Junior (Individual Contributor Level 1)");
    await ContractsPage.selectPredefinedWorkScope("Account Executive");
    await ContractsPage.clickNextBtn();
    await ContractsPage.selectCurrency("GBP - British Pound");
    await ContractsPage.enterRate("1000");
    await ContractsPage.selectPaymentFreq("Weekly");
    await ContractsPage.clickNextBtn();
    await ContractsPage.clickNextBtn();
    await ContractsPage.enterSpecialClause();
    await ContractsPage.clickNextBtn();
    await ContractsPage.clickCreatesContractBtn();
});