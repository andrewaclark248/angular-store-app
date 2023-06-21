import { Injectable } from '@angular/core';
import { Product } from './../models/product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  storage = window.localStorage;

  constructor() { }


  getCart(): Product[] {
    const getProduct: string = this.storage.getItem('cart') || '[]';

    let result = JSON.parse(getProduct);
    return result;
  }

  addToCart(product: Product[]) {
    this.storage.setItem('cart', JSON.stringify(product));

  }

  clearCart() {
    this.storage.setItem('cart', '');
  }



}
