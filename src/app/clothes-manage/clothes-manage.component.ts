import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { ClothesDataService } from '../clothes-data.service';
import { Item } from '../items/item';

@Component({
  selector: 'app-clothes-manage',
  templateUrl: './clothes-manage.component.html',
  styleUrls: ['./clothes-about.component.scss']
})

export class ClothesManageComponent implements OnInit {
  items!: Item[];
  id!: number;
  name: string = '';
  type: string = '';
  price: number = 0;
  stock: number = 0;
  promotion: boolean = false;
  image: string = '';

  constructor(private ClothesDataService: ClothesDataService) {
  }

  ngOnInit(): void {
    this.showTable();
  }

  showTable() {
    this.ClothesDataService.getAll().subscribe(clothes => this.items = clothes);
  }

  addItem() {
    let item: Item = {
      id: this.id,
      name: this.name,
      type: this.type,
      price: this.price,
      stock: this.stock,
      image: this.image,
      promotion: this.promotion,
      quantity: this.stock
    }
    this.ClothesDataService.addItems(item).subscribe(clothes => {
      this.items.push(item)
      this.showTable();
    });
  }

  deleteItem(item: Item) {
    this.ClothesDataService.deleteItems(item).subscribe(clothes => {
      item.id
      this.showTable();
    });
  }
}
