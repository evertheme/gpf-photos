import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OccasionsComponent } from './occasions.component';

const routes: Routes = [
  { path: '',  component: OccasionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OccasionsRoutingModule { }
