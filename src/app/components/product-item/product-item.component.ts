import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product'
import { ProductService } from './../../services/product.service'
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    constructor(private productService: ProductService) { }


    ngOnInit(): void {

    }
}
