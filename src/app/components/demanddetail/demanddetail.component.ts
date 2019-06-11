import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RouterModule,
         ActivatedRoute,
         Router,
         ParamMap} from '@angular/router';
import { DemanddetailService} from '../../service/demanddetail/demanddetail.service';
import { DemnadslistService} from '../../service/demandslist/demnadslist.service';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { FormGroup,
         FormBuilder,
         Validators } from '@angular/forms';
import {switchMap} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {el} from '@angular/platform-browser/testing/src/browser_util';


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

  id: number;
  addPositionForm: FormGroup;
  demand: Demand;
  positions: Position[] = [];
  notFound = false;
  hide = false;
  editPositionForm: FormGroup;
  editPosition: Position;
  editPositionId: number;
  quantity: number;
  price_one: number;

  constructor(
    private http: HttpClient,
    private ddService: DemanddetailService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private demandsService: DemnadslistService,
  ) {}

  ngOnInit() {
    this.addPositionForm = this.formBuilder.group({
      name_product: ['', Validators.required],
      art_product: ['', Validators.required],
      quantity: ['', Validators.compose([Validators.required ,
                                                  Validators.max(32767),
                                                  Validators.maxLength(5)])],
      price_one: ['', Validators.required],
    });
    this.loadPositions();
    this.editPositionForm = new FormGroup({
      name_product: new FormControl('', Validators.required),
      art_product: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.compose([Validators.required ,
                                                                         Validators.max(32767),
                                                                         Validators.maxLength(5)])),
      price_one: new FormControl('', Validators.required),
    });
  }

  loadPositions() {
    this.id = Number(this.route.snapshot.paramMap.get('demandId'));
    this.addPositionForm.addControl('demand', new FormControl(this.id));
    //Отправляет айди заявки к которой нужно прикрепить эту позицию
    this.ddService.getDemand(this.id).subscribe((data: Demand) => {
      this.demand = data;
      this.ddService.getPositions(this.id).subscribe((positions: Position[]) => {
        this.positions = positions;
        console.log(positions);
      });
      console.log(data);
    });
  }

  gotoDemandList() {
    this.router.navigate(['/demands'
      // , { id: this.id, foo: 'foo'} -эта штука показывает откуда ты вернулся из какой заявки
      ]);
  }

  deletePos(position: Position){
    // Можно ли сделать подтверждение удаления через confirm? или это тупо
    if( confirm("Вы действительно хотите удалить данную позицию?")){
      this.ddService.deletePosition(position.id)
        .subscribe((datadel: Position[]) => {
          // console.log(datadel);
          this.loadPositions();
        });
    }
    else {
      this.loadPositions();
    }
  }

  openForm(position: Position) {
    this.editPositionForm.patchValue(position);
    // this.editPositionForm.patchValue({name_product: position.name_product,
    //                                        art_product: position.art_product,
    //                                        quantity: position.quantity,
    //                                        price_one: position.price_one});
    // this.editPosition = position;
    this.editPositionId = position.id;
    console.log(this.editPosition);
  }

  savePosition() {
    // this.editPosition = this.editPositionForm.value;
    console.log('FORM VALUE BEFORE SAVE', this.editPositionForm.value);
    this.ddService.editPosition(this.editPositionId, this.editPositionForm.value)
      .subscribe(res => {
        console.log(res);
        this.loadPositions();
        this.editPositionId = undefined;
      });
    this.editPosition = undefined;

  }

  onSubmit() {
    if (this.addPositionForm.invalid) {
      console.log('тут должна быть ошибка, типа неправильно заполнена форма');
    }
    console.log(this.addPositionForm);
    this.ddService.postPosition(this.addPositionForm.value)
      .subscribe(position => {
        console.log(position);
        this.addPositionForm.patchValue(
          {
            name_product: '',
            art_product: '',
            quantity: '',
            price_one: '',
          });
        this.loadPositions();
        // Как сделать, чтобы после отправки форма очистилась?
      });
  }

  calcPrice(price: number, quantity: number) {
    return price * quantity;
  }

}
