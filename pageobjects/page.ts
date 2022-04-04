import * as EnvData from '../config/user.json'

export default class Page {
  
    public open(path: string) {
        return browser.url('https://app.deel.training/login');
    }

    //Gets the user's username.
    async getUser() {
        var userName = '';
        userName = EnvData["deel_users"]["user"].email;
        return userName;
    }

    //Gets the user's password.
    async getPassword() {
        var pass = '';
        pass = EnvData["deel_users"]["user"].password;
        return pass;
    }

    //Returns the day from current date minus one.
    async generateDateMinusOne() {
        let d = new Date();
        d.setDate(d.getDate() - 1);
        let dM = d.getDate();
        return dM;
    }

    //Generates a random name.
    async generateRandomName(length: number) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
}
