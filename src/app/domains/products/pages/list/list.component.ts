import { Component, inject, signal } from '@angular/core';


import { ProductComponent } from "../../components/product/product.component";
import { HeaderComponent } from '@shared/components/header/header.component';
import { ProductModels } from "@shared/models/product.models";
import { CartService } from "@shared/services/cart.service";
import { ProductService } from "@shared/services/product.service";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<ProductModels[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);


  ngOnInit() {
    this.productService.getProducts()
      .subscribe({
        next: (producs) => this.products.set(producs),
        error: () => {

        }
      })
  }

  addToCard(product: ProductModels) {
    this.cartService.addToCart(product);

  }
}

