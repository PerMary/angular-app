import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Demand} from '../../components/demanddetail/demanddetail.component';
import { Observable} from 'rxjs';

@Injectable()
export class DemanddetailService {

  demand: Demand;


  constructor(private http:HttpClient) { }

  getPositions(){
    // return this.http.get('http://localhost:8000/demands');

    return this.http.get('http://localhost:8000/positions/');
    // -как правильно фильтровать?
    // demand.id
  //  Как правильно указать адрес откуда брать отфильтрованные данные?
  }
}
