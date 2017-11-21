import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AgGridModule } from 'ag-grid-angular/main';
import { GridViewModule } from '../../shared/grid-view/grid-view.module';
import { CurrencyComponent } from '../../shared/grid-view/cell-renderer/currency/currency.component';
import { DeleteRowComponent } from '../../shared/grid-view/cell-renderer/delete-row/delete-row.component';
import { ImageComponent } from '../../shared/grid-view/cell-renderer/image/image.component';
import { WrapTextComponent } from '../../shared/grid-view/cell-renderer/wrap-text/wrap-text.component';
import { SafeHtmlPipe } from './safeHtml.pipe';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventoryService } from './inventory.service';
import { UploadInventoryComponent } from './upload-inventory/upload-inventory.component';

import { MDBBootstrapModules } from 'ng-mdb-pro';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InventoryRoutingModule,
    AngularFirestoreModule.enablePersistence(),
    GridViewModule,
    MDBBootstrapModules.forRoot(),
    AgGridModule.withComponents([
      CurrencyComponent,
      DeleteRowComponent,
      ImageComponent,
      WrapTextComponent
    ])
  ],
  declarations: [
    SafeHtmlPipe,
    InventoryComponent,
    UploadInventoryComponent
  ],
  providers:[
    InventoryService
  ]
})
export class InventoryModule { }
