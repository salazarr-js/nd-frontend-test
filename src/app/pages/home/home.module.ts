import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NdNavbarComponent } from '../../components/nd-navbar/nd-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
  ],
  declarations: [
    HomePage,
    NdNavbarComponent
  ]
})
export class HomePageModule {}
