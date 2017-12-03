import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OccasionsRoutingModule } from './occasions-routing.module';
import { OccasionsComponent } from './occasions.component';

@NgModule({
  imports: [
    CommonModule,
    OccasionsRoutingModule
  ],
  declarations: [OccasionsComponent]
})
export class OccasionsModule { }
