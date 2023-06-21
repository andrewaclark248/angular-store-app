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
      fullName: ['', [Validators.required, Validators.minLength(5)]], // Validators.minLength(4)
      address: ['', [Validators.required, Validators.minLength(5)]],
      ccNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userInfo.emit(this.checkoutForm.value);
  }




}
