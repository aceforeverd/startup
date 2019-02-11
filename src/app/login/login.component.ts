import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from "@angular/material";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  hide: boolean = true;
  matcher: ErrorStateMatcher;

  constructor(private match: ErrorStateMatcher, private builder: FormBuilder) {
    this.matcher = match;
    this.formGroup = builder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  getEmailControl(): AbstractControl {
    return this.formGroup.get('email');
  }

  getPasswordControl(): AbstractControl {
    return this.formGroup.get('password');
  }

  onSubmit() {
    console.log(this.formGroup)
  }

}
