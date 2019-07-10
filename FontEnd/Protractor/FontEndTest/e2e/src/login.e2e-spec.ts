import { LoginPage } from './login.po';
import { browser } from 'protractor';

describe('Login tests', () => {
    let page : LoginPage;

    beforeEach(()=>{
    
        page = new LoginPage;
        page.navigateTo();
        
    });

    it('login form should be valid',()=>{

        page.getNameTextBox().sendKeys('khang meo meo');
        page.getPasswordTexBox().sendKeys('ahiahaihia');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });

    it('form login should be invalid',()=>{
        page.getNameTextBox().sendKeys('');
        page.getPasswordTexBox().sendKeys('');
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-invalid');
    });

    it('form login should go to homepage',()=>{
        page.getNameTextBox().sendKeys('test');
        page.getPasswordTexBox().sendKeys('test');
        page.getBtnSubmit().click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/home")
    });
    
    it('form login shout go to sign-up page',()=>{
        page.getBtnGoSignUp().click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/sign-up")
    });

});