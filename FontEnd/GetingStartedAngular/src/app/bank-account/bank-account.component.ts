import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';
@Component({
  selector: 'app-bank-account',
  
  template: 'Bank Name: {{bankName}} Account Id: {{id}}',
})
export class BankAccountComponent implements OnInit {

    // This property is bound using its original name.
  @Input() bankName: string;

  // this property value is bound to a different property name
  // when this component is instantiated in a template.
  @Input('account-id') id: string;

    // this property is not bound, and is not automatically updated by Angular
  normalizedBankName: string;


  constructor() { }

  ngOnInit() {
  }

}
