import { Component, Input } from '@angular/core';
import { ProductService } from './../../services/product.service'
import { CartService } from './../../services/cart.service'
import { Product } from './../../models/product'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart: Product[] = [];
  totalPrice: number = 0;

  constructor(private productService: ProductService, private cartService: CartService, private route: Router) { 

  }


  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.calculatePrice();
  }

  calculatePrice() {
    let sum: number = 0
    this.cart.forEach((p) => {
      sum = sum + (Number(p.quantity)*p.price)
    })
    this.totalPrice = Math.round(100*sum)/100;  ;
  }


  removeProductFromCart(product: Product): void {
    let newCart = this.cart.filter((p) => {
      return p.id != product.id
    })
    this.cartService.addToCart(newCart)
    window.location.reload()

  }

  selectedChange(product: Product, event: any) {
    const cartIndex = this.cart.findIndex(cart => cart.id === product.id);
    this.cart[cartIndex].quantity = event.target.value;
    this.cartService.addToCart(this.cart)
  }

  onSubmit(value: any) {
    console.log("event received in cart component")
    this.cartService.clearCart();
    console.log("value", value)
    let successRoute = `checkout-success/${value.fullName}/200`
    this.route.navigate([successRoute]);
  }


}
