import { trigger } from '@angular/animations';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clothes } from './clothes-list/clothes';

@Injectable({
  providedIn: 'root'
})
export class ClothesCartService {
  private _cartList: Clothes[]=[];
  cartList: BehaviorSubject<Clothes[]> = new BehaviorSubject(this._cartList);

  constructor() { }
  
  addToCart(clothes: Clothes) {
      let item   = this._cartList.find((v1) => v1.name == clothes.name);
      if(!item) {
        this._cartList.push({...clothes});
      }
      else {
        item.quantity+=clothes.quantity;
      }
      console.log(this._cartList);
      this.cartList.next(this._cartList);
    }

}
