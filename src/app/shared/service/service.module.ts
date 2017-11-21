import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BroadcastEventService } from './broadcast-event.service';
import { DomHelperService } from './dom-helper.service';
import { FirestoreService } from './firestore.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    BroadcastEventService,
    DomHelperService,
    FirestoreService
  ]
})
export class ServiceModule { }
