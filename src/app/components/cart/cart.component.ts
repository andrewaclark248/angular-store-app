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

  //props
  @Input() product: Product;

  cart: Product[] = [];


  constructor(private productService: ProductService, private cartService: CartService) { 
    this.product = {
      id: 0,
      name: "",
      price: 0,
      url: "",
      description: ""
    }
  }


  ngOnInit(): void {
        
    this.cart = this.cartService.getCart();

  }

  removeProductFromCart(product: Product): void {
    let newCart = this.cart.filter((p) => {
      return p.id != product.id
    })
    this.cartService.addToCart(newCart)
  }

  selectedChange(value: any) {
    //this.selectedItem = value;
    //console.log("selectedItem", this.selectedItem)
  }

}
