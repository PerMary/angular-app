import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { DemnadslistService} from "../../service/demandslist/demnadslist.service";
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {DatePipe} from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { Route, Router} from '@angular/router';

interface Demand {
  id: number;
  created_date: string;
  user: {};
  description: string;
}



@Component({
  selector: 'app-demandslist',
  templateUrl: './demandslist.component.html',
  styleUrls: ['./demandslist.component.css']
})
export class DemandslistComponent implements OnInit {

  noCreatedDemands = false;
  addDemandForm: FormGroup;
  id:number;
  demands: Demand[]=
    [
      // {id:1, created_date:"",user:[], description:"Закупка оборудования для проекта 'Источник И1'" },
      // {id:2, created_date:"",user:[], description:"Закупка для проекта 'Источник'" },
      // {id:3, created_date:"",user:[], description:"Закупка оборудования" },
    ];


  constructor(
    private http: HttpClient,
    private demandsService: DemnadslistService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('demandId'));
    this.loadDemands();
    this.addDemandForm = this.formBuilder.group({
      description: ['', Validators.required],
    });
  }

  loadDemands() {
    this.demandsService.getData().subscribe((data: Demand[]) => {
      this.demands = data;
      console.log(this.demands);
    }
    );
  }

  deleteDem(demand: Demand): void{
    this.demandsService.deleteDemand(this.id);
  }


  onSubmit(){
    if (this.addDemandForm.invalid) {
      console.log('тут должна быть ошибка, типа неправильно заполнена форма');
    }
    console.log(this.addDemandForm);
    this.demandsService.postData(this.addDemandForm.value)
      .subscribe(demand => {
        console.log(demand);
        this.router.navigate(['/detail/' + demand['id']]);
        // this.loadDemands();
      });
  }

}


