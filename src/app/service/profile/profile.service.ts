import { Injectable } from '@angular/core';
import { User} from '../../components/login/login.component';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user = {};

  constructor(private http: HttpClient ) {
  }

  // getUser(){
  //   return this.http.get( 'http://localhost:8000/auth/me/');
  // }
}
