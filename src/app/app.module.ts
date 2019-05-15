import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,
         ReactiveFormsModule, } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import components
import { DemandslistComponent} from './components/demandslist/demandslist.component';
import { DemanddetailComponent } from './components/demanddetail/demanddetail.component';




@NgModule({
  declarations: [
    AppComponent,
    DemandslistComponent,
    DemanddetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [], //registration of services
  bootstrap: [AppComponent]
})
export class AppModule { }
