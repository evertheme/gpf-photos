import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory.component';
import { UploadInventoryComponent } from './upload-inventory/upload-inventory.component';

const routes: Routes = [
  { path: '',  component: InventoryComponent },
  { path: 'upload',  component: UploadInventoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
