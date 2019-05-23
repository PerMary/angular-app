import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { DemnadslistService} from "../../service/demandslist/demnadslist.service";
import {DatePipe} from '@angular/common';
import { ActivatedRoute} from '@angular/router';

interface Demand {
  id: number;
  created_date: string;
  user: string[];
  description: string;
}



@Component({
  selector: 'app-demandslist',
  templateUrl: './demandslist.component.html',
  styleUrls: ['./demandslist.component.css']
})
export class DemandslistComponent implements OnInit {

  demands: Demand[]=
    [
      // {id:1, created_date:"",user:[], description:"Закупка оборудования для проекта 'Источник И1'" },
      // {id:2, created_date:"",user:[], description:"Закупка для проекта 'Источник'" },
      // {id:3, created_date:"",user:[], description:"Закупка оборудования" },
    ];

  addDemand(id: number, created_date:string,user:string[], descriptions: string): void{
    // if (id==null || created_date==null || created_date.trim()=="" || descriptions==null || descriptions.trim()=="")
    //   return;


    // this.demands.push(new Demand (id, created_date, descriptions));
  }

  constructor(
    private http: HttpClient,
    private demandsService: DemnadslistService,
  ) { }

  ngOnInit() {
    this.demandsService.getData().subscribe((data: Demand[]) => {
      this.demands = this.demands.concat(data);
      console.log(this.demands);
    }
    );
  }

  openForm(){}




}

