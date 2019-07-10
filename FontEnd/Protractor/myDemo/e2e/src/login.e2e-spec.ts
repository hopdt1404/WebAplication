import {LoginPage} from './login.po';
import {browser} from 'protractor';

describe('Login Test', () =>{
    let page :LoginPage;

    beforeEach(() => {
        page = new LoginPage();
        page.navigateTo();
    });

    it('Login form should be valid', () => {
        page.getUserNameTextbox().sendKeys('wrongusername');
        browser.sleep(2000);
        page.getPasswordTextbox().sendKeys('wrongpassword');
        browser.sleep(2000);
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
    });
   


    it('Login form should be invalid', () => {
        page.getUserNameTextbox().sendKeys('');
        browser.sleep(2000);
        page.getPasswordTextbox().sendKeys('');
        browser.sleep(2000);
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-invalid');
        browser.sleep(2000);
    });
    
    it('Should Logged success', () => {
        page.getUserNameTextbox().sendKeys('test');
        page.getPasswordTextbox().sendKeys('test');
        browser.sleep(2000);
        page.getSubmitButton().click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/home");
        browser.sleep(2000);
    });
    browser.sleep(2000);
    it('Should Logged success', () => {
        page.getUserNameTextbox().sendKeys('hopdt');
        page.getPasswordTextbox().sendKeys('hopdt');
        browser.sleep(2000);
        page.getSubmitButton().click();
        
        expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/home");
        browser.sleep(2000);
    });
    
})
