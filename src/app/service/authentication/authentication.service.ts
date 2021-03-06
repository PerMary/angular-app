import { Injectable } from '@angular/core';
import { User } from '../../components/login/login.component';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User;

  constructor(private http: HttpClient) { }

  Login(username: string,  password: string){
    return this.http.post('http://localhost:8000/auth/token/login/',
                          {'username':username,'password':password});
  }

  getInfoUser(token: string){
    return this.http.get('http://localhost:8000/auth/me/',
      {headers: new HttpHeaders().set('Authorization', 'Token ' + token)});
  }

}
