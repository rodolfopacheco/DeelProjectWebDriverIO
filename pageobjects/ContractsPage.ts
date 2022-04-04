import Page from './page';

class ContractsPage extends Page {
    //LOCATORS.
    //Main Page.

    public get fixedRateBtn() {
        return $('//a[@href="/create/fixed"]');
    }

    //Fixed Rate.
    public get contractorStartDateDdl() {
        return $('//div[@class="deel-ui__calendar-input-container__input"]');
    }

    public get contractNameInput() {
        return $('[name="name"]');
    }

    public get contractorTaxResSel() {
        return $('//div[@data-qa="contractor-tax-residence" and @class="deel-ui__select__input-container"]');
    }

    public get contractorStateSel() {
        return $('//div[@data-qa="contractor-tax-residence-province"]');
    }

    public get jobTitleSel() {
        return $('[name="jobTitle"]');
    }

    public get seniorityLevelSel() {
        return $('//div[@data-qa="selector-seniority-level"]');
    }

    public get predefinedScopesSel() {
        return $('//div[@class="flex scopes-dropdown-toggle align-items-center"]');
    }

    public get nextBtn() {
        return $('//button[@data-qa="next"]');
    }

    public get currencySel() {
        return $('//div[@data-qa="currency-select"]');
    }

    public get rateInput() {
        return $('[name="rate"]');
    }

    public get paymentFreq() {
        return $('//div[@data-qa="cycle-select"]');
    }

    public get specialClauseBtn() {
        return $('//button[@data-qa="add-a-special-clause"]');
    }

    public get specialClauseTxtArea() {
        return $('//div[@data-qa="special-clause-card"]//textarea');
    }

    public get createContractBtn() {
        return $('//button[@data-qa="create-contract"]');
    }

    //METHODS.

    //Clicks on Fixed Rate option.
    async clickFixedRateBtn() {
        await this.fixedRateBtn.click();
    }

    //Sets the Contractor's Start Date to Today Minus 1.
    async selectContractorStartDate() {
        var startDate =  $('//abbr[text()=' + await this.generateDateMinusOne() + ']/ancestor::button');
        await this.contractorStartDateDdl.click();
        await startDate.click();
    }

    //Enters a new contract name.
    async enterContractName(){ 
        await this.contractNameInput.setValue(await this.generateRandomName(10));
    }

    //Selects a Contractor's Tax Residence.
    async selectContractorTaxRes(countryXPath: string) {
        await this.contractorTaxResSel.click();
        var countryXpathOpt =  $('//*[text() = "' + countryXPath + '"]');
        await countryXpathOpt.click();
    }

    //Selects a Contractor's State.
    async selectContractorTaxState(stateXPath: string) {
        await this.contractorStateSel.click();
        var stateXpathOpt =  $('//*[text() = "' + stateXPath + '"]');
        await stateXpathOpt.click();
    }

     //Selects a Job Title.
     async selectJobTitle(jobTitleXPath: string) {
        await this.jobTitleSel.click();
        var jobTitleXPathOpt =  $('//*[text() = "' + jobTitleXPath + '"]');
        await jobTitleXPathOpt.click();
    }

    //Selects a Seniority Level.
    async selectSeniorityLevel(seniorityXPath: string) {
        await this.seniorityLevelSel.click();
        var seniorityXPathOpt =  $('//*[text() = "' + seniorityXPath + '"]');
        await seniorityXPathOpt.click();
    }

     //Selects a Predefined Work Scope Level.
     async selectPredefinedWorkScope(predefScope: string) {
        await this.predefinedScopesSel.click();
        var predefScopeOpt =  $('//*[text() = "' + predefScope + '"]');
        await predefScopeOpt.click();
    }

     //Clicks Next Button.
     async clickNextBtn() {
        await this.nextBtn.click();
    }

     //Selects a Currency.
     async selectCurrency(currency: string) {
        await this.currencySel.click();
        var currencyOpt =  $('//*[text() = "' + currency + '"]');
        await currencyOpt.click();
    }

     //Enters a new rate.
     async enterRate(rate: string) {
        await this.rateInput.setValue(rate);
    }

    //Selects a Payment Frequency.
    async selectPaymentFreq(paymentFreq: string) {
        await this.paymentFreq.click();
        var paymentFreqOpt =  $('//*[text() = "' + paymentFreq + '"]');
        await paymentFreqOpt.click();
    }

     //Enters a special clause.
     async enterSpecialClause() {
        await this.specialClauseBtn.click();
        await this.specialClauseTxtArea.setValue(await this.generateRandomName(20));
    }

    //Clicks Create Contract button.
    async clickCreatesContractBtn() {
        await this.createContractBtn.click();
    }
}

export default new ContractsPage();