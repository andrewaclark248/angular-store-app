import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit  {

  checkoutForm!: FormGroup;


  constructor(private fb: FormBuilder) { 
    this.checkoutForm = this.fb.group({
      fullName: ['', [Validators.required]], // Validators.minLength(4)
      address: ['', [Validators.required]],
      ccNumber: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {

    console.log("form method hit")
  }




}
