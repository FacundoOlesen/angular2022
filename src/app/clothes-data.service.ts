import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Clothes } from './clothes-list/clothes';
import { Item } from './items/item';

const URL= 'https://62bf6d80be8ba3a10d69b11e.mockapi.io/clothesapi';

@Injectable({
  providedIn: 'root'
})
export class ClothesDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(URL)
      .pipe(
        tap((clothes: Clothes[])=>clothes.forEach(clothes=>clothes.quantity=0))
        );
  }

  public addItems(item: Item): Observable<Item> {
    return this.http.post<Item>(URL, item);
  }

  public deleteItems(item: Item):Observable<Item> {
    return this.http.delete<Item>(URL+'/'+item.id);
  }

}
