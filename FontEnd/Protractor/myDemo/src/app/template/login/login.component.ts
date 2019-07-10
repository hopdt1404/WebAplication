import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submmitted = false;
  returnUrl : string;
  error: "";


  constructor(
    private fromBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    ) {    
  }

  ngOnInit() {
    this.loginForm = this.fromBuilder.group({
      userName :['', Validators.required],
      passWord :['', Validators.required],
    })
  }
  onSubmit(){
    let userName = this.loginForm.get("username").value;
    let passWord = this.loginForm.get("passord").value;
    if((userName =="test" || userName =="hopdt") && (passWord == "test" || passWord =="hopdt") ){
      this.router.navigate(['/home']);
    }
  }

}
