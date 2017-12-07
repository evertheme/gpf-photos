import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { UIModule } from '../../shared/ui/ui.module';


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    UIModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
