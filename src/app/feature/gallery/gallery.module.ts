import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';

import { MDBBootstrapModules } from '../../shared/mdb/mdb.module';
import { InventoryModule } from '../inventory/inventory.module';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    InventoryModule,
    MDBBootstrapModules
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
