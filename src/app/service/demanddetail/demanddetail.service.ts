import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class DemanddetailService {

  constructor(private http:HttpClient) { }

  getPositions(){
    return this.http.get('http://localhost:8000/positions/');
  }
}
