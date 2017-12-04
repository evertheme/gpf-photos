import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';

import { MDBBootstrapModules } from 'ng-mdb-pro';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MDBBootstrapModules.forRoot()
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
