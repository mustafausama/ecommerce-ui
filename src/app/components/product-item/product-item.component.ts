import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  selectedQuantity: number = 1;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {}
  addToCart() {
    this.storeService.addToCart(this.product.id, this.selectedQuantity);
    alert('Item added to cart!!');
  }
}
