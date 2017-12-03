import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SympathyRoutingModule } from './sympathy-routing.module';
import { SympathyComponent } from './sympathy.component';

@NgModule({
  imports: [
    CommonModule,
    SympathyRoutingModule
  ],
  declarations: [SympathyComponent]
})
export class SympathyModule { }
