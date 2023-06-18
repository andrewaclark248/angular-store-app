import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../models/product'
import { ProductService } from './../../services/product.service'
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    @Input() product: Product;

    constructor(private productService: ProductService) { 
        this.product = {
            id: 0,
            name: "",
            price: 0,
            url: "",
            description: ""
        }
    }


    ngOnInit(): void {

    }
}
