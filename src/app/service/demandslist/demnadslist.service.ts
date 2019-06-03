import { Injectable } from '@angular/core';
import { HttpClient,
         HttpHeaders } from "@angular/common/http";
import { Demand} from '../../components/demanddetail/demanddetail.component';
import { Observable} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

const token = localStorage.getItem('token');
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Token ' + token,
  })
};

@Injectable()
export class DemnadslistService {

  DemandsUrl = 'http://localhost:8000/detail/';

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get('http://localhost:8000/demands/');
  }

  postData(demand: any): Observable<Demand> {
    return this.http.post<Demand>(this.DemandsUrl, demand, httpOptions);
  }

  deleteDemand(id: number): Observable <{}> {
    const url = `${this.DemandsUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
