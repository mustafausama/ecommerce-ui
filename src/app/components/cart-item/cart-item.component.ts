import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartProduct: CartProduct;
  quantity: number = 1;
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.quantity = this.cartProduct.quantity;
  }
  modifyQuantity() {
    this.storeService.modifyCartItemQuantity(
      this.cartProduct.product.id,
      this.quantity
    );
  }
}
