import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';


import { ProductComponent } from "../../components/product/product.component";
import { HeaderComponent } from '@shared/components/header/header.component';
import { ProductModelDtoUpdate, ProductModels, ProductModelsDTOCreate } from "@shared/models/product.models";
import { CartService } from "@shared/services/cart.service";
import { ProductService } from "@shared/services/product.service";
import { CategoryService } from '@shared/services/category.service';
import { CategoryModels } from '@shared/models/category.models';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<ProductModels[]>([]);
  categories = signal<CategoryModels[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?: string;


  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProducts();
  }

  addToCard(product: ProductModels) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts(this.category_id)
      .subscribe({
        next: (data) => this.products.set(data),
        error: () => {
        }
      });
  }

  private getCategories() {
    this.categoryService.getAll()
      .subscribe({
        next: (data) => this.categories.set(data),
        error: () => {

        }
      });
  }

  createNewProduct() {
    console.log("create Product");
    const productDto: ProductModelsDTOCreate = {
      title: 'Nuevo Product',
      description: 'bla bla bla',
      images: ['https://imgur.com/KXj6Tpb', 'https://imgur.com/KXj6Tpb'],
      price: 5,
      categoryId: 1,
    }
    this.productService.create(productDto)
      .subscribe(data => {
        console.log(data);
        this.products.update((prevState) => [...prevState, data])
      });
  }

  updateProduct(product: ProductModels) {

    const changes: ProductModelDtoUpdate = {
      title: "Producto Actualizadosss"
    }
    this.productService.update(product.id, changes).subscribe(data => {
      console.log(data);
      this.getProducts();
    })
  }

  deleteProduct(product: ProductModels) {
    this.productService.delete(product.id).subscribe(data => {
      this.getProducts();
    });
  }
}

