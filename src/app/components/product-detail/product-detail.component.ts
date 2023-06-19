import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service'
import { CartService } from './../../services/cart.service'
import { Product } from './../../models/product'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  id: number | null = null;
  product: Product | null = null;
  products: Product[] | null = null;

  //form input
  selectedItem = '1';

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
    this.productService.getProducts().subscribe(res =>{
      this.products = res;
      this.product = this.getProduct(this.id)
      console.log("product", this.product)
    })
    
  }

  getProduct(id: number | null) {
    if (this.products == null || this.products.length == 0) {
      return null;
    }

    let result = this.products?.filter((p) => {
      return p.id == id
    })
    return result[0];
  }

  selectedChange(value: any) {
    this.selectedItem = value;
    console.log("selectedItem", this.selectedItem)
  }


  addProductToCart(): void {
      this.product!.quantity = this.selectedItem;

      let cart = this.cartService.getCart()
      cart.push(this.product as Product)
      this.cartService.addToCart(cart)
  }

}
