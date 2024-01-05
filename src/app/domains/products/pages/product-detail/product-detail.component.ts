import { Component, Input, inject, signal } from '@angular/core';
import { ProductService } from "@shared/services/product.service";
import { ProductModels } from "@shared/models/product.models";
import { CurrencyPipe, NgForOf, UpperCasePipe } from "@angular/common";
import { CartService } from "@shared/services/cart.service";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    UpperCasePipe,
    CurrencyPipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {


  @Input() id?: string;
  product = signal<ProductModels | null>(null);

  cover = signal('');
  private productService = inject(ProductService);
  private cartService = inject(CartService);


  ngOnInit() {
    if (this.id) {

      this.productService.getOne(this.id)
        .subscribe({
          next: (product) => {
            this.product.set(product);
            if (product.images.length > 0) {
              this.cover.set(product.images[0]);
            }
          }
        });
    }
  }

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }

  }
}
