import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesAboutComponent } from './clothes-about/clothes-about.component';
import { ShopClothesComponent } from './shop-clothes/shop-clothes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clothes',
    pathMatch: 'full'
  },
  {
    path: 'clothes',
    component: ShopClothesComponent
  },
  {
    path: 'about',
    component: ClothesAboutComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
