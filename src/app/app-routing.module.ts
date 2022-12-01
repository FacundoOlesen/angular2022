import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesManageComponent } from './clothes-manage/clothes-manage.component';
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
    path: 'manage',
    component: ClothesManageComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
