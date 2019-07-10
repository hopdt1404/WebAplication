// import { SignUpPage } from './sign-up.po';
// import {browser} from 'protractor';

// describe('SingUp Test', () =>{
//     let page :SignUpPage;

//     beforeEach(() => {
//         page = new SignUpPage();
//         page.navigateTo();
//     });

//     it('SingUp form should be valid', () => {
//         page.getUserNameTextbox().sendKeys('confinono');
//         page.getPasswordTextbox().sendKeys('12343243');
//         page.getUserEmailTextbox().sendKeys('thasf.sadfas');
//         page.getUserAddressTextbox().sendKeys("110 Tran Phu");
//         let form = page.getForm().getAttribute('class');
//         expect(form).toContain('ng-valid');
//     });

//     it('Login form should be invalid', () => {
//         page.getUserNameTextbox().sendKeys('');
//         page.getPasswordTextbox().sendKeys('');
//         page.getUserEmailTextbox().sendKeys('');
//         page.getUserAddressTextbox().sendKeys("");
//         let form = page.getForm().getAttribute('class');
//         expect(form).toContain('ng-invalid');
//     });

//     it('Login form should be invalid', () => {
//         page.getUserNameTextbox().sendKeys('');
//         page.getPasswordTextbox().sendKeys('');
//         page.getUserEmailTextbox().sendKeys('');
//         page.getUserAddressTextbox().sendKeys("110 tran phu ha dong ha noi");
//         let form = page.getForm().getAttribute('class');
//         expect(form).toContain('ng-invalid');
//     });
    


//     it('SignUp success', () => {
//         page.getUserNameTextbox().sendKeys('test');
//         page.getPasswordTextbox().sendKeys('test');
//         page.getUserEmailTextbox().sendKeys('tuanvu.14390@gmail.com');
//         page.getUserAddressTextbox().sendKeys("110 tran phu ha dong ha noi");
//         page.getSubmitButton().click();
//         expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/login")
//     });

//     it('SignUp success', () => {
//         page.getUserNameTextbox().sendKeys('hopdt');
//         page.getPasswordTextbox().sendKeys('hopdt');
//         page.getUserEmailTextbox().sendKeys('thanhtung.uet@gmail.com');
//         page.getUserAddressTextbox().sendKeys("110 tran phu ha dong ha noi");
//         page.getSubmitButton().click();
//         expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/login")
//     });
// })
