import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SympathyComponent } from './sympathy.component';

const routes: Routes = [
  { path: '',  component: SympathyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SympathyRoutingModule { }
