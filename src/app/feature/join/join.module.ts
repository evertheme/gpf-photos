import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinRoutingModule } from './join-routing.module';
import { JoinComponent } from './join.component';

@NgModule({
  imports: [
    CommonModule,
    JoinRoutingModule
  ],
  declarations: [JoinComponent]
})
export class JoinModule { }
