import { Component, OnInit } from '@angular/core';

class Position{
  name: string;
  article: string;
  quantity: number;
  priceOne: number;

  constructor(name: string, article:string, quantity:number, priceOne:number){
    this.name = name;
    this.article = article;
    this.quantity = quantity;
    this.priceOne = priceOne;
  }
}


@Component({
  selector: 'app-demanddetail',
  templateUrl: './demanddetail.component.html',
  styleUrls: ['./demanddetail.component.css']
})
export class DemanddetailComponent {

  positions: Position[]=
    [
      {name: "Резистор", article:"РН-1К", quantity:5, priceOne:10000},
    ];

  addPosition(name: string, article:string, quantity:number, priceOne:number): void{
    if(name==null || name.trim()=="" || article==null || article.trim()=="" || quantity==null || priceOne==null)
      return;
    this.positions.push(new Position(name, article, quantity, priceOne));
  }

  constructor() { }


}
