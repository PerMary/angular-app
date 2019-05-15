import { Component } from '@angular/core';

class Demand{
  id: number;
  create_date: string;
  user: string;
  description: string;

  constructor(id:number, create_date:string, user: string, desription: string){
    this.id = id;
    this.create_date = create_date;
    this.user = user;
    this.description = desription;
  }
}


@Component({
  selector: 'app-demandslist',
  templateUrl: './demandslist.component.html',
  styleUrls: ['./demandslist.component.css']
})
export class DemandslistComponent {

  demands: Demand[]=
    [
      {id:1, create_date:"", user:"Иванов И.И.",description:"Закупка оборудования для проекта 'Источник И1'" },
      {id:2, create_date:"", user:"Админов А.А.",description:"Закупка для проекта 'Источник'" },
      {id:3, create_date:"", user:"Петров П.П.",description:"Закупка оборудования" },
    ];

  addDemand(id: number, create_date:string, user: string, descriptions: string): void{

    if (id==null || create_date==null || create_date.trim()=="" || user==null || user.trim()=="" ||  descriptions==null || descriptions.trim()=="")
      return;
    this.demands.push(new Demand(id, create_date, user, descriptions));
  }

  constructor() { }


}

