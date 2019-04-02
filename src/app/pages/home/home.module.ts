import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NdNavbarComponent } from '../../components/nd-navbar/nd-navbar.component';

import { NgsRevealModule } from 'ngx-scrollreveal';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    NgsRevealModule,
  ],
  declarations: [
    NdNavbarComponent,
    HomePage
  ]
})
export class HomePageModule {}
