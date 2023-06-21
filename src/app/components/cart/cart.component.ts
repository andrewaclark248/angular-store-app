import { Component, Input } from '@angular/core';
import { ProductService } from './../../services/product.service'
import { CartService } from './../../services/cart.service'
import { Product } from './../../models/product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart: Product[] = [];


  constructor(private productService: ProductService, private cartService: CartService) { 

  }


  ngOnInit(): void {
    this.cart = this.cartService.getCart();
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
    //this.cartService.clearCart();
    //this.route.navigate([`success/${value.firstName}/${this.totalPrice}`]);
  }


}
