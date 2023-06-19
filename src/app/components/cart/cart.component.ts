import { Component } from '@angular/core';
import { ProductService } from './../../services/product.service'
import { CartService } from './../../services/cart.service'
import { Product } from './../../models/product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private productService: ProductService, private cartService: CartService) { }

  products: Product[] = [];

  ngOnInit(): void {
        
    this.productService.getProducts().subscribe((res) => {
        this.products = res;

  });

 }

}
