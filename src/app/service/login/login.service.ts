import { Injectable } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { User } from '../../components/login/login.component';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
  user: User;

  constructor(private http: HttpClient) { }

  Login(username: string,  password: string){
    return this.http.post('http://localhost:8000/auth/token/login/',{'username':username,'password':password});
  }
}
