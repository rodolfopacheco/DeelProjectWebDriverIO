import Page from './page';

class HomePage extends Page {
    /**
     * LOCATORS
     */
    //Create Contract menu button.
    public get createContractMenu() {
        return $('//a[@href="/create"]');
    }

    //Accepts Cookies button.
    public get acceptCookiesBtn() {
        return $('#CybotCookiebotDialogBodyButtonAccept');
    }

    //Tips' modal.
    public get nextBtn() {
        return $('(//div[@class="modal-content"]//button[@theme="text-primary" and @sizetype="lg"])[2]');
    }

    //METHODS.

    //Clicks Create Contract menu.
    async clickCreateContractMenu(){
        await this.createContractMenu.click();
    }

    //Clicks Accept Cookies button.
    async clickAcceptCookiesBtn(){
        await this.acceptCookiesBtn.click();
    }

     //Accepts and closes the Tips Modal Pop-up.
     async closeTipsModal(){
        await this.nextBtn.click();
        await this.nextBtn.click();
        await this.nextBtn.click();
        await this.nextBtn.click();
    }
}

export default new HomePage();