import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.css']
})
export class CheckoutSuccessComponent {

  fullName: string | null = ''
  totalPrice: string | null = '';

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.fullName = params.get('name');
      this.totalPrice = params.get('price');
    })
  }
}
