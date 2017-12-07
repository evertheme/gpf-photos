import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModules } from '../../shared/mdb/mdb.module';

import { UIModule } from '../../shared/ui/ui.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    MDBBootstrapModules,
    UIModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
