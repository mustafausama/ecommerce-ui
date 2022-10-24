import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartProduct, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private products: Product[] = [];
  private cart: CartProduct[] = [];

  products$ = new BehaviorSubject<Product[]>(this.products);
  cart$ = new BehaviorSubject<CartProduct[]>(this.cart);

  constructor(private http: HttpClient) {}

  fetchProducts() {
    const sub = this.http
      .get<Product[]>('/assets/data.json')
      .subscribe((products) => {
        this.products = products;
        this.products$.next(this.products);

        sub.unsubscribe();
      });
  }

  addToCart(id: number, quantity: number) {
    // Indicator for if the item is alreay in cart
    let found = false;

    // If already in cart, increase the quantity
    this.cart = this.cart.map((item) => {
      if (item.product.id !== id) return item;
      found = true;
      return { ...item, quantity: item.quantity + quantity };
    });

    // If not in cart, add it to the cart
    if (!found)
      this.cart.push({
        product:
          this.products[
            this.products.findIndex((product) => product.id === id)
          ],
        quantity,
      });

    // Broadcast the new state
    this.cart$.next(this.cart);
  }

  modifyCartItemQuantity(id: number, quantity: number) {
    if (quantity === 0) this.removeCartItem(id);
    else {
      this.cart = this.cart.map((item) =>
        item.product.id === id ? { ...item, quantity } : item
      );
      this.cart$.next(this.cart);
    }
  }

  removeCartItem(id: number) {
    this.cart = this.cart.filter((item) => item.product.id !== id);
    this.cart$.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.cart$.next(this.cart);
  }
}
