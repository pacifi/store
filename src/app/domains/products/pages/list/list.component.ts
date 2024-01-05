import { Component, inject, signal } from '@angular/core';


import { ProductComponent } from "../../components/product/product.component";
import { HeaderComponent } from '@shared/components/header/header.component';
import { ProductModels } from "@shared/models/product.models";
import { CartService } from "@shared/services/cart.service";
import { ProductService } from "@shared/services/product.service";
import { CategoryService } from '@shared/services/category.service';
import { CategoryModels } from '@shared/models/category.models';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<ProductModels[]>([]);
  categories = signal<CategoryModels[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);


  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  addToCard(product: ProductModels) {
    this.cartService.addToCart(product);
  }
  private getProducts(){
    this.productService.getProducts()
      .subscribe({
        next: (data) => this.products.set(data),
        error: () => {
        }
      });
  }
  private getCategories(){
    this.categoryService.getAll()
      .subscribe({
        next: (data) => this.categories.set(data),
        error: () => {

        }
      });
  }
}

