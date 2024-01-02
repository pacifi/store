import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { ProductModels } from "../models/product.models";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: WritableSignal<ProductModels[]> = signal<ProductModels[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);

  })

  constructor() {
  }

  addToCart(product: ProductModels) {
    this.cart.update((state: ProductModels[]) => [...state, product]);
  }
}
