import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NewSalePage } from './new-sale.page';
import { NDSidebarComponent } from '../../components/nd-sidebar/nd-sidebar.component';

// THIRD PARTYS
import { NgxLoadingModule } from 'ngx-loading';
import { NgSelectModule } from '@ng-select/ng-select';

const routes: Routes = [
  {
    path      : '',
    component : NewSalePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxLoadingModule.forRoot({}),
    NgSelectModule,
  ],
  declarations: [
    NewSalePage,
    NDSidebarComponent
  ]
})
export class NewSalePageModule {}
