import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  profile = new FormGroup({
    name: new FormControl(null,Validators.required),
    email: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required]),
    address: new FormControl(null,Validators.required),
    tel: new FormControl(null,Validators.required)
  });

  get name(){
    return this.profile.get('name');
  }
  get tel(){
    return this.profile.get('tel');
  }
  get email(){
    return this.profile.get('email');
  }
  get password(){
    return this.profile.get('password');
  }
  get address(){
    return this.profile.get('address');
  }
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    if(this.profile.valid){
      // alert('CREATE ACCOUT SUCCESS : name:' + this.profile.get('name').value + ' email: '+ this.profile.get('email').value+' address: '+this.profile.get('address').value +' tel: '+this.profile.get('tel').value);
      location.href='/login';
    }
    else{
      this.validateAllFields(this.profile);
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
