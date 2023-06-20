import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  fullName: string = "";
  address: string = "";
  ccNumber: string = "";
  form!: FormGroup;


  constructor() { 
    
  }

  onSubmit() {

  }


}
