import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//  COMPONENTS 
import { NewSalePage } from './new-sale.page';
import { NDSidebarComponent } from '../../components/nd-sidebar/nd-sidebar.component';
// THIRD PARTYS
import { NgxLoadingModule } from 'ngx-loading';
import { NgSelectModule } from '@ng-select/ng-select';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

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
    SweetAlert2Module.forRoot()
  ],
  declarations: [
    NewSalePage,
    NDSidebarComponent
  ]
})
export class NewSalePageModule {}
