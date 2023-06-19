import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../models/product'
import { ProductService } from './../../services/product.service'
import { CartService } from './../../services/cart.service'
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    //form input
    selectedItem = '1';

    //props
    @Input() product: Product;
    
    constructor(private productService: ProductService, private cartService: CartService) { 
        this.product = {
            id: 0,
            name: "",
            price: 0,
            url: "",
            description: ""
        }
    }

    selectedChange(value: any) {
        this.selectedItem = value;
        console.log("selectedItem", this.selectedItem)
    }

    
    addProductToCart(product: Product): void {
        let newProduct = product;
        newProduct.quantity = this.selectedItem;

        let cart = this.cartService.getCart()
        cart.push(newProduct)
        this.cartService.addToCart(cart)
    }


    ngOnInit(): void {

    }
}
