import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: ['./input-address.component.scss']
})
export class InputAddressComponent implements OnInit {

  @Input('profile') profile: FormControl;
  @Input('address') address: FormControl;
  
  constructor() { }

  ngOnInit() {
  }

}
