import { browser, by, element } from 'protractor';

export class SignUpPage {
    navigateTo(){
        return browser.get('/sign-up');
    }

    getUserNameTextbox(){
        return element(by.name('username'));
    }

    getPasswordTextbox(){
        return element(by.name('password'));
    }
    getUserEmailTextbox(){
        return element(by.name('useremail'));
        
    }
    getUserAddressTextbox(){
        return element(by.name('userAddress'));
    }

    getForm(){
        return element(by.css('#signUpForm'));
    }

    getSubmitButton(){
        return element(by.css('#btnSubmit'));
    }

}