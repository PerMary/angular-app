import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Demand} from '../../components/demanddetail/demanddetail.component';
import { Observable} from 'rxjs';
import { Router,
         ActivatedRoute,
         RouterModule,
         ParamMap } from '@angular/router';
import { Position} from '../../components/demanddetail/demanddetail.component';

@Injectable()
export class DemanddetailService {

  PositionsUrl = 'http://localhost:8000/positions/';
  demandId: Demand;
  id: number;


  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }



  getDemand(demandId: number){
    return this.http.get(`http://localhost:8000/demands/` + demandId.toString() );
  }

  getPositions(demandId: number){
    return this.http.get('http://localhost:8000/positions?demand=' + demandId.toString(), );
  }


  postPosition(positions: any ): Observable<Position> {
    return this.http.post<Position>(this.PositionsUrl, positions);
  }
}
