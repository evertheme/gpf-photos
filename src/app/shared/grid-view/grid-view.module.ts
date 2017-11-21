import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyComponent } from './cell-renderer/currency/currency.component';
import { DeleteRowComponent } from './cell-renderer/delete-row/delete-row.component';
import { ImageComponent } from './cell-renderer/image/image.component';
import { WrapTextComponent } from './cell-renderer/wrap-text/wrap-text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CurrencyComponent,
    DeleteRowComponent,
    ImageComponent,
    WrapTextComponent
  ]
})
export class GridViewModule { }
