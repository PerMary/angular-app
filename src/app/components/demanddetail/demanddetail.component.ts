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
  user: [];
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
  demand: Demand[]=[];
  demands: Demand[]=[];
  positions: Position[]=
    [
      // {id:1, demand:100, name_product: "Резистор", art_product:"РН-1К", quantity:5, price_one:10000},
    ];


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
    this.ddService.getPositions().subscribe((data: Demand[]) => {
      // Position[]) =>{
      // this.positions = this.positions.concat(data);
      //console.log(this.positions);
        this.demand = this.demand.concat(data);
      console.log(this.demand);
    }
    );
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
