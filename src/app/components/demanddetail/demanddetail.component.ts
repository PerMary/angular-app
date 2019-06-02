import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RouterModule,
         ActivatedRoute,
         Router,
         ParamMap} from '@angular/router';
import { DemanddetailService} from '../../service/demanddetail/demanddetail.service';
import { DemnadslistService} from '../../service/demandslist/demnadslist.service';
import { ReactiveFormsModule} from '@angular/forms';
import { FormGroup,
         FormBuilder,
         Validators } from '@angular/forms';
import {switchMap} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';


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
  user: {};
  description: string;
  positions: [];
}



@Component({
  selector: 'app-demanddetail',
  templateUrl: './demanddetail.component.html',
  styleUrls: ['./demanddetail.component.css']
})
export class DemanddetailComponent implements OnInit {

  // demand: number;
  id: number;
  addPositionForm: FormGroup;
  demand: Demand;
  positions: Position[] = [];
  notFound = false;
    // [
    //   // {id:1, demand:100, name_product: "Резистор", art_product:"РН-1К", quantity:5, price_one:10000},
    // ];


  constructor(
    private http: HttpClient,
    private ddService: DemanddetailService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private demandsService: DemnadslistService,
  ) {}
  // { this.demand = activeRoute.snapshot.params['demand']; }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('demandId'));
    this.ddService.getDemand(this.id).subscribe((data: Demand) => {
      this.demand = data;
      this.ddService.getPositions(this.id).subscribe((positions: Position[]) => {
        this.positions = positions;
      });
      console.log(data);
    }, (error) => {
      this.notFound = true;
      console.log(error);
    });

   //  this.id = this.route.paramMap.pipe(
   //    switchMap((params: ParamMap) => this.ddService.getPositions('demandId')));
   //
   // //  this.ddService.getDemand(this.demand);
   // //                                                        console.log(this.demand);
   //  this.ddService.getPositions(this.id).subscribe((data: Position[]) =>{
   //                                                        this.positions = this.positions.concat(data);
   //                                                        console.log(this.positions);
   //  }
   //  );
    this.addPositionForm = this.formBuilder.group({
      name: ['', Validators.required],
      art: ['', Validators.required],
      quantity: ['', Validators.required],
      price_one: ['', Validators.required],
    });
  }

  gotoDemandList() {
    this.router.navigate(['/demands']);
  }

}
