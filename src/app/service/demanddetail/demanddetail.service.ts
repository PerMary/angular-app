import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Demand} from '../../components/demanddetail/demanddetail.component';
import { Observable} from 'rxjs';
import { Router,
         ActivatedRoute,
         RouterModule,
         ParamMap } from '@angular/router';

@Injectable()
export class DemanddetailService {

  demandId: Demand;
  id: number;


  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }



  getDemand(demandId: number){
    return this.http.get(`http://localhost:8000/demands/` + demandId.toString() );
  }

  getPositions(demandId: number){
    return this.http.get('http://localhost:8000/positions?demand=' + demandId.toString(), );

    // return this.http.get(`http://localhost:8000/demands/${demandId}/`  );
    // return this.http.get(`http://localhost:8000/demands/` + demandId.toString()  );
  //  Как правильно указать адрес откуда брать отфильтрованные данные?
  // Если мне нужен адрес http://localhost:8000/positions/?demand=1
  // Или http://localhost:8000/demands/1/ (с позициями)
  // id=1
  }

  addPosition() {}
}
