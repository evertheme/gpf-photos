import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { UiModule } from '../../shared/ui/ui.module';


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    UiModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
