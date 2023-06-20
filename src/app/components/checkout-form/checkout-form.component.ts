import { Component } from '@angular/core';

@Component({
  selector: 'checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  fullName: string = "";
  address: string = "";
  ccNumber: string = "";


  constructor() { 
  }

  onSubmit() {

  }


}
