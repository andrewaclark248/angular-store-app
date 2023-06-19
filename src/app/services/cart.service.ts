import { Injectable } from '@angular/core';
import { Product } from './../models/product'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  storage = window.localStorage;

  constructor() { }


  getCart() {
    const getProduct: string | null = this.storage.getItem('cart');
    if (getProduct == null) {
      return [];
    }
    let result = JSON.parse(getProduct);
    return result;
  }

  addToCart(product: Product[]) {
    this.storage.setItem('cart', JSON.stringify(product));

  }



}
