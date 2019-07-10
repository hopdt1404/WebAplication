import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, AbstractControl, ValidatorFn } from '@angular/forms'


const emailValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
  if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value)) {
    return null;
  }
  return {
    invalidEmail: (control.value) + ' is not a valid email',
  };
};
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent  {

  title = 'Practice';

  showTable = false;
  listEmps = [];

  employees = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, emailValidator]),
    tel: new FormArray([
      new FormControl(null, [Validators.required, Validators.minLength(10)])
    ]),

  });
  get name() {
    return this.employees.get('name');
  }
  get email() {
    return this.employees.get('email');
  }
  get tel() {
    return this.employees.get('tel') as FormArray;
  }
  addTel() {
    this.tel.push(new FormControl(null, [Validators.required, Validators.minLength(10)]));
  }
  removeTel(index: number) {
    this.tel.removeAt(index);
  }
  removeEmp(index: number) {
    this.listEmps = this.listEmps.slice(0, index - 1).concat(this.listEmps.slice(index));
    this.showTable = true;
  }


  onSubmit() {
    if (this.employees.valid) {
      const data = {
        name: this.name.value,
        email: this.email.value,
        tel: this.tel.value,
      }
      this.listEmps.push(data);
      this.showTable = true;
    }
    else {
      this.validateAllFields(this.employees);
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
