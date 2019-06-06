import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders, HttpParams
} from '@angular/common/http';
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

  demandId: number;
  description: string;
  demand: Demand;
  DemandsUrl = 'http://localhost:8000/demands/';

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get('http://localhost:8000/demands/');
  }

  postData(demand: any): Observable<Demand> {
    return this.http.post<Demand>(this.DemandsUrl, demand, httpOptions);
  }

  deleteDemand(demandId: any): Observable <{}> {
    // const url = `${this.DemandUrl}/${id}`;
    return this.http.delete('http://localhost:8000/demands/' + demandId);
  }

  editDemand(demand: Demand): Observable<Demand>{
    return this.http.put<Demand>(this.DemandsUrl + demand['id'] + '/', demand, httpOptions);
    }
}
