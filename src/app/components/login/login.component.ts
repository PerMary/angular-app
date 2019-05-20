import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService} from '../../service/login/login.service';
import {error} from 'selenium-webdriver';

export interface User{
  id: number;
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private loginServ: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(){
    if (this.loginForm.invalid) {
        return;
    }
    this.loginServ.Login(this.loginForm.controls.username.value,
                         this.loginForm.controls.password.value ).subscribe(data=>{console.log(data)},
                                                                                  error=>{console.log(error)});

  }

}
