import { Component } from '@angular/core';
import { ClothesCartService } from '../clothes-cart.service';
import { ClothesDataService } from '../clothes-data.service';
import { Clothes } from './clothes';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})
export class ClothesListComponent {
  clothes : Clothes [] = [];

constructor(
  private cart: ClothesCartService,
  private clothesDataService: ClothesDataService ) {
}

ngOnInit(): void {
  this.clothesDataService.getAll()
  .subscribe(clothes =>this.clothes= clothes);
}

addToCart(clothes: Clothes): void {
    this.cart.addToCart(clothes);
    clothes.stock-=clothes.quantity;
    clothes.quantity=0;   
}


maxReached(m:string, clothes:Clothes){
  alert(m);
  clothes.stock = 0;  
}

}
