import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { DemandslistComponent} from '../demandslist/demandslist.component';
import { DemanddetailService} from '../../service/demanddetail/demanddetail.service';
import {Observable} from 'rxjs';
import { switchMap} from 'rxjs/internal/operators';
import { DemnadslistService} from '../../service/demandslist/demnadslist.service';

export interface Position {
  id: number;
  demand: number;
  name_product: string;
  art_product: string;
  quantity: number;
  price_one: number;
}

export interface Demand {
  id: number;
  created_date: string;
  user: string[];
  description: string;
  positions: [];
}



@Component({
  selector: 'app-demanddetail',
  templateUrl: './demanddetail.component.html',
  styleUrls: ['./demanddetail.component.css']
})
export class DemanddetailComponent implements OnInit {

  demand: number;
  id: number;
  // demands: Demand[]=[];
  positions: Position[]=
    [
      // {id:1, demand:100, name_product: "Резистор", art_product:"РН-1К", quantity:5, price_one:10000},
    ];

  addPosition(id: number, demand: number, name_product: string, art_product:string, quantity:number, price_one:number): void{
    // if(name==null || name.trim()=="" || article==null || article.trim()=="" || quantity==null || priceOne==null)
    //   return;
    // this.positions.push(new Position(name, article, quantity, priceOne));
  }

  constructor(
    private http: HttpClient,
    private ddService: DemanddetailService,
    private route: ActivatedRoute,
    private  router: Router,
    private servicelist: DemnadslistService,
  ) {}
  // { this.demand = activeRoute.snapshot.params['demand']; }

  ngOnInit(){
    // this.route.paramMap.pipe(switchMap((params: ParamMap)=>
    // this.ddService.getPosition(params.get(demand))));

    this.ddService.getPositions().subscribe((data: Position[])=>{
      this.positions = this.positions.concat(data);
      // console.log(this.positions);
    });
  }


}
