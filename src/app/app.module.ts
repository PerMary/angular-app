import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,
         ReactiveFormsModule,
         FormBuilder,
         FormGroup,
         Validators,  } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import components
import { DemandslistComponent} from './components/demandslist/demandslist.component';
import { DemanddetailComponent } from './components/demanddetail/demanddetail.component';

//import services
import {DemnadslistService} from "./service/demandslist/demnadslist.service";
import { LoginComponent } from './components/login/login.component';
import { LoginService} from './service/login/login.service';


@NgModule({
  declarations: [
    AppComponent,
    DemandslistComponent,
    DemanddetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DemnadslistService,LoginService], //registration of services
  bootstrap: [AppComponent]
})
export class AppModule { }
