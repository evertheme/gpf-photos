import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModules } from 'ng-mdb-pro';

import { GlobalHeaderComponent } from './global-header/global-header.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModules,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    GlobalHeaderComponent,
    GlobalFooterComponent,
    UserFormComponent
  ],
  exports: [
    GlobalHeaderComponent,
    GlobalFooterComponent,
    UserFormComponent
  ]
})
export class UiModule { }
