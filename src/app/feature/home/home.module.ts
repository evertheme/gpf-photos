import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UIModule } from '../../shared/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    UIModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
