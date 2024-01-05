import { Component, Input, inject, signal } from '@angular/core';
import { ProductService } from "@shared/services/product.service";
import { ProductModels } from "@shared/models/product.models";
import { UpperCasePipe } from "@angular/common";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {


  @Input() id?: string;
  product = signal<ProductModels | null>(null);
  private productService = inject(ProductService);
  cover = signal('');


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

}
