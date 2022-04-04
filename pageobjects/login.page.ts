import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';

class LoginPage extends Page {
   
    public get inputEmail () {
        //return $('#username');
        return $('//input[@name="email"]');
    }

    public get inputPassword () {
        //return $('#password');  
        return $('//input[@name="password"]');
    }

    public get btnSubmit () {
        return $('//button[@type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login () {
       /*  await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click(); */
        await this.inputEmail.setValue(await super.getUser());
        await this.inputPassword.setValue(await super.getPassword());
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
