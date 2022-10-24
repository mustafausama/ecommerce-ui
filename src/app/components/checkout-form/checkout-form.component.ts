import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  @Input() price: number;

  form = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern('^[0-9]*$'),
    ]),
  });
  constructor(private router: Router, private storeService: StoreService) {}

  ngOnInit(): void {}

  checkout() {
    if (this.form.invalid) return;
    this.router
      .navigate(['/confirmation'], {
        state: {
          fullName: this.form.controls.fullName.value,
          price: this.price,
        },
        skipLocationChange: true,
      })
      .then(() => {
        this.storeService.clearCart();
      });
  }
}
