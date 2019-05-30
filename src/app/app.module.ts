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
import { Routes,
         RouterModule,
         RouterOutlet} from '@angular/router';

//import services
import {DemnadslistService} from "./service/demandslist/demnadslist.service";
import { DemanddetailService} from './service/demanddetail/demanddetail.service';
import { AuthenticationService} from './service/authentication/authentication.service';
import { ProfileService} from './service/profile/profile.service';

//import components
import { DemandslistComponent} from './components/demandslist/demandslist.component';
import { DemanddetailComponent } from './components/demanddetail/demanddetail.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    DemandslistComponent,
    DemanddetailComponent,
    LoginComponent,
    NotfoundComponent,
    LogoutComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DemnadslistService,
              DemanddetailService,
              AuthenticationService,
              ProfileService,], //registration of services
  bootstrap: [AppComponent],
})
export class AppModule { }
