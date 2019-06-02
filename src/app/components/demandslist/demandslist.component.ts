import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { DemnadslistService} from "../../service/demandslist/demnadslist.service";
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {DatePipe} from '@angular/common';
import { ActivatedRoute} from '@angular/router';

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

  addDemandForm: FormGroup;
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
  ) { }


  ngOnInit() {
    this.loadDemands();
    this.addDemandForm = this.formBuilder.group({
      // id: ['', Validators.required],
      // created_date: ['', Validators.required],
      // user: ['', Validators.required],
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


  onSubmit(){

    if (this.addDemandForm.invalid) {
      console.log('тут должна быть ошибка, типа неправильно заполнена форма');
    }
    console.log(this.addDemandForm);
    this.demandsService.postData(this.addDemandForm.value)
      .subscribe(demand => {
        console.log(demand);
        this.loadDemands();
      });
  }

}


