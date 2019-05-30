import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { LoginService} from '../../service/login/login.service';
import {error} from 'selenium-webdriver';
import {AppComponent} from '../../app.component';
import { AuthenticationService} from '../../service/authentication/authentication.service';

export interface User{
  id: number;
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  full_name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;

  @Output()public fullnameChange = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private loginServ: AuthenticationService) { }

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
                         this.loginForm.controls.password.value )
                             .subscribe (token=> {console.log(token),
                         this.loginServ.getInfoUser(token['auth_token'])
                             .subscribe((data: User)=> {AppComponent.fullname.next(data['short_name']);
                                 console.log(data)})},
                                   error=>{console.log(error)});


  }
}
