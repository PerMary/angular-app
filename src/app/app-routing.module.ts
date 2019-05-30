import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {LoginComponent} from './components/login/login.component';
import {DemandslistComponent} from './components/demandslist/demandslist.component';
import {DemanddetailComponent} from './components/demanddetail/demanddetail.component';
import { LogoutComponent} from './components/logout/logout.component';
import { ProfileComponent} from './components/profile/profile.component';


const routes: Routes =[
    { path: 'login', component: LoginComponent},
    { path: 'demands', component: DemandslistComponent},
    { path: 'detail/:demand.id', component: DemanddetailComponent},
    { path: '',  redirectTo: '/demands', pathMatch: 'full' },
    { path: 'logout', component: LogoutComponent},
    { path: 'profile', component: ProfileComponent},
// когда вводишь несуществующий id, он открывает страницу demand-detail/id а не noffound
// как правильно перенаправить стартовую страницу на demand-list?
    { path: '**', component: NotfoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
