import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductModels } from "../models/product.models";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)

  constructor() {
  }

  getProducts(category_id?: string) {
    const url = new URL("https://api.escuelajs.co/api/v1/products")
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<ProductModels[]>(url.toString());
  }

  getOne(id: string) {
    return this.http.get<ProductModels>(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
}
