import {Component,  OnInit } from '@angular/core';
import { FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})



function checkEmail(control: AbstractControl) {
  var re = /^(([^<>()[].,;:\s@"]+(.[^<>()[].,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  return re.test(control.value.toLowerCase());
}
function validateEmail(control: AbstractControl) {

 

  if (checkEmail(control)) {
    
    return null;
  }
   else {
    
    return {
      invalidEmail: (control.value) + 'is not security',
    };
  }
 
}


function checkPassword(control: AbstractControl){
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}/;
  return re.test(control.value)
}
function validatePassword(control: AbstractControl) {

 

  if (checkPassword(control)) {
    
    return null;
  }
   else {
    
    return {
      invalidEmail: (control.value) + 'is not security',
    };
  }
 
}
export class SignUpComponent implements OnInit {

  title = 'Practice';

  showTable = false;
  listEmps = [];
  form = FormControl;
  get name() {
    return this.signUpForm.get('username');
  }
  get email() {
    return this.signUpForm.get('useremail');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get address(){
    return this.signUpForm.get('address');
  }
   
  signUpForm : FormGroup;
  

  
  
  
  constructor(
    private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      signUpForm = new FormGroup({
        username : new FormControl(null,[Validators.required,Validators.minLength(4)]),
        useremail : new FormControl(null,[Validators.required, validateEmail]),
        userpassword: new FormControl(null, [ Validators.required,validatePassword]),
        address: new FormControl(null)
      })
    
  ) {    
   }

  ngOnInit() {
    
  }
  
  onSubmmit(){
    if(this.signUpForm.valid){
      const valueObject = {
        username : this.signUpForm.get("username").value,
        useremail : this.signUpForm.get("useremail").value,
        userpassword : this.signUpForm.get("userpassword").value,
        address: this.signUpForm.get("address")

      }
      this.listEmps.push(this.signUpForm);
      this.showTable = true;
    }else{
      this.validateAllFields(this.signUpForm);
    }


  }
  validateAllFields(form: FormGroup | FormArray) {
    Object.keys(form.controls).forEach((field: string) => {
      const control = form.get(field);
      if (control instanceof FormArray) {
        this.validateAllFields(control);
      }
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }

}
