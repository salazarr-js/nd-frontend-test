import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NewSalePage } from './new-sale.page';

const routes: Routes = [
  {
    path      : '',
    component : NewSalePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewSalePage]
})
export class NewSalePageModule {}
