import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path         : '',
    pathMatch  : 'full',
    loadChildren : './pages/home/home.module#HomePageModule'
  },
  {
    path         : 'new-sale',
    loadChildren : './pages/new-sale/new-sale.module#NewSalePageModule'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
