import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-tel',
  templateUrl: './input-tel.component.html',
  styleUrls: ['./input-tel.component.scss']
})
export class InputTelComponent implements OnInit {
  @Input('profile') profile : FormGroup;
  @Input('tel') tel: FormControl;

  constructor() { }
  
  ngOnInit() {
  }

}
