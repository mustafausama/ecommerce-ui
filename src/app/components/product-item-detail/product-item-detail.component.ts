import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;
  selectedQuantity: number = 1;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storeService: StoreService
  ) {
    let fetched = false;
    const routerSubscription = this.route.params.subscribe((params) => {
      const subscription = this.storeService.products$.subscribe((products) => {
        if (products.length === 0 && !fetched) {
          this.storeService.fetchProducts();
          fetched = true;
          return;
        }

        const index = products.findIndex(
          (product) => product.id === parseInt(params['id'])
        );
        if (index < 0) {
          subscription.unsubscribe();
          routerSubscription.unsubscribe();
          router.navigate(['/404']);
        } else {
          this.product = products[index];
          subscription.unsubscribe();
          routerSubscription.unsubscribe();
        }
      });
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.storeService.addToCart(this.product.id, this.selectedQuantity);
    alert('Item added to cart!!');
  }
}
