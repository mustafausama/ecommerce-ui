import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartProduct } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cart: CartProduct[];
  private subscription: Subscription;
  confirmed = false;
  constructor(private storeService: StoreService) {
    this.subscription = storeService.cart$.subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  totalInvoice(): number {
    let res = 0;
    this.cart.map((item) => {
      res += item.quantity * item.product.price;
    });

    return res;
  }
}
