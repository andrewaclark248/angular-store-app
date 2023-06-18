import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product'
import { ProductService } from './../../services/product.service'
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(private productService: ProductService) { }


    title: string = "Product List";
    products: Product[] = [];


    ngOnInit(): void {
        
        this.productService.getProducts().subscribe((res) => {
            this.products = res;

        });

     }
}
