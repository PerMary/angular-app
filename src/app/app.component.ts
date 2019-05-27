import {Component, Input, OnInit} from '@angular/core';
import {LoginComponent, User} from './components/login/login.component';
import { LoginService} from './service/login/login.service';
import {Subject} from 'rxjs';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @Input() fullname = 'Неизвестно';
  public Full_name = 'Неизвестно';

  public static fullname: Subject<any>=new Subject();

  constructor() {
    AppComponent.fullname.subscribe(res=>this.Full_name= res);
  }
  // receiveFromChild(event){
  //   this.fullname = event.full_name;
  // }
}
