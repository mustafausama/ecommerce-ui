import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartProduct, Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private subscription: Subscription;

  constructor(private storeService: StoreService) {
    this.storeService.fetchProducts();
    this.subscription = this.storeService.products$.subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToCart(productDetails: { id: number; quantity: number }) {
    this.storeService.addToCart(productDetails.id, productDetails.quantity);
    alert('Item added to cart!!');
  }
}
