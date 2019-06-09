import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Demand} from '../../components/demanddetail/demanddetail.component';
import { Observable} from 'rxjs';
import { Router,
         ActivatedRoute,
         RouterModule,
         ParamMap } from '@angular/router';
import { Position} from '../../components/demanddetail/demanddetail.component';


const token = localStorage.getItem('token');
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Token ' + token,
  })
};


@Injectable()
export class DemanddetailService {

  PositionsUrl = 'http://localhost:8000/positions/';
  demandId: Demand[];
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

  deletePosition(positionId: any): Observable<{}>{
    return this.http.delete(`http://localhost:8000/positions/` + positionId);
  }

  editPosition(id: number, position: any): Observable<Position>{
    return this.http.patch<Position>(this.PositionsUrl + id + '/',
                                      position,
                                      httpOptions);
    }
}
