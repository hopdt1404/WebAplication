import { browser, by, element } from 'protractor';

export class SignUpPage {
  navigateTo() {
    return browser.get('/sign-up')
  }
    getNameTextBox(){
        return element(by.name('name'));
    }
    getEmailTextBox(){
        return element(by.name('email'));
    }
    getPasswordTextBox(){
        return element(by.name('password'));
    }
    getAddressTextBox(){
        return element(by.name('address'));
    }
    getTelTextBox(){
        return element(by.name('tel'));
    }
    getForm(){
        return element(by.css('#formSignUp'));
    }
    getBtnSubmit(){
        return element(by.css('#btnSubmit'))
    }

}