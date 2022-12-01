import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { FormsModule } from '@angular/forms';
import { ClothesManageComponent } from './clothes-manage/clothes-manage.component';
import { ShopClothesComponent } from './shop-clothes/shop-clothes.component';
import { CartComponent } from './cart/cart.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    ClothesManageComponent,
    ShopClothesComponent,
    CartComponent,
    InputNumberComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
