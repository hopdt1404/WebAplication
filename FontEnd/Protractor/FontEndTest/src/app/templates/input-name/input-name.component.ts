import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss']
})
export class InputNameComponent implements OnInit {
  @Input('profile') profile: FormGroup;

  @Input('name') name: FormControl;


  constructor() { }

  ngOnInit() {
  }

}
