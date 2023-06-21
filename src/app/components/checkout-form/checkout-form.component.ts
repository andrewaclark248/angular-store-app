import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit  {

  checkoutForm!: FormGroup;
  @Output() userInfo = new EventEmitter();


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
    this.userInfo.emit(this.checkoutForm.value);
  }




}
