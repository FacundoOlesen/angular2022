import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Clothes } from '../clothes-list/clothes';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {

  @Input()
  quantity!: number;
  @Input()
  max!: number;
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();
  upQuantity(): void {
    if(this.quantity<this.max) { 
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }
    else {
      this.maxReached.emit("Se alcanzo el max");
    }

  }
  downQuantity(): void {
    if(this.quantity>0)
      this.quantity--;
      this.quantityChange.emit(this.quantity);
  }
  changeQuantity(): void  {
    this.quantityChange.emit(this.quantity);
  }
  
}
