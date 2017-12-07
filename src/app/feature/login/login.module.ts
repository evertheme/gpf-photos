import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { MDBBootstrapModules } from 'ng-mdb-pro';

import { UIModule } from '../../shared/ui/ui.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    UIModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
