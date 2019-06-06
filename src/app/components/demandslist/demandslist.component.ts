import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { DemnadslistService} from "../../service/demandslist/demnadslist.service";
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {DatePipe} from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { Route, Router} from '@angular/router';
import {Demand} from '../demanddetail/demanddetail.component';
import {assertNumber} from '@angular/core/src/render3/assert';


@Component({
  selector: 'app-demandslist',
  templateUrl: './demandslist.component.html',
  styleUrls: ['./demandslist.component.css']
})
export class DemandslistComponent implements OnInit {

  addDemandForm: FormGroup;
  editDemandForm: FormGroup;
  id: number;
  edit = false;
  demandId: number;
  description: string;
  demand: Demand;
  demands: Demand[] = [];


  constructor(
    private http: HttpClient,
    private demandsService: DemnadslistService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit() {
    this.loadDemands();
    this.addDemandForm = this.formBuilder.group({
      description: ['', Validators.required],
    });
    this.editDemandForm = this.formBuilder.group({
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

  deleteDem(demand: Demand) {
    if (confirm("Вы действительно хотите удалить данную заявку?")){
      this.demandsService.deleteDemand(demand.id)
        .subscribe((datadel: Demand[]) => {
          // console.log(datadel);
          this.loadDemands();
          });
    }
    else {
      this.loadDemands();
    }
  }

  editDem(demand: Demand, id: number) {
    //   .subscribe(val => {
    //   console.log(val);
    // });
    // this.demandsService.editDemand(this.id).subscribe( res =>)//Что здесь написать?
    //   .subscribe((val: Demand) =>{
    //   console.log(val);
    // })
  }

  openForm(demand: Demand, demandId: number) {
    if (demand.id ){
      console.log(demand.id);
      this.edit = true;
    }
  }

  closeForm(demand: Demand){
    if (demand.id ) {
      console.log(demand.id);
      this.edit = false;
    }
  }



  onSubmit() {
    if (this.addDemandForm.invalid) {
      console.log('тут должна быть ошибка, типа неправильно заполнена форма');
    }
    console.log(this.addDemandForm);
    this.demandsService.postData(this.addDemandForm.value)
      .subscribe(demand => {
        // console.log(demand);
        this.router.navigate(['/detail/' + demand['id']]);
        // this.loadDemands();
      });
  }

}


