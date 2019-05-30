import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { DemnadslistService} from "../../service/demandslist/demnadslist.service";
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
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

  addDemandForm: FormGroup;
  demands: Demand[]=
    [
      // {id:1, created_date:"",user:[], description:"Закупка оборудования для проекта 'Источник И1'" },
      // {id:2, created_date:"",user:[], description:"Закупка для проекта 'Источник'" },
      // {id:3, created_date:"",user:[], description:"Закупка оборудования" },
    ];

  addDemand(descriptions: string){
    // if (id==null || created_date==null || created_date.trim()=="" || descriptions==null || descriptions.trim()=="")
    //   return;

    // this.demands.push(new Demand (descriptions));
  }

  constructor(
    private http: HttpClient,
    private demandsService: DemnadslistService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.demandsService.getData().subscribe((data: Demand[]) => {
      this.demands = this.demands.concat(data);
      console.log(this.demands);
    }
    );
    this.addDemandForm = this.formBuilder.group({
      id: ['', Validators.required],
      created_date: ['', Validators.required],
      user: ['', Validators.required],
      description: ['', Validators.required],
    });
  }


  onSubmit(){
    // console.warn(this.addDemandForm.value);
    if(this.addDemandForm.invalid){
      console.log('adsjasa');
    }
    console.log(this.addDemandForm);
  }

}


