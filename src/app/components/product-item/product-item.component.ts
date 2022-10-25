import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() addToCart: EventEmitter<{ id: number; quantity: number }> =
    new EventEmitter();
  selectedQuantity: number = 1;

  constructor() {}

  ngOnInit(): void {}
  addToCartHandler() {
    this.addToCart.emit({
      id: this.product.id,
      quantity: this.selectedQuantity,
    });
  }
}
