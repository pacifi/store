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

  getProducts() {
    return this.http.get<ProductModels[]>('https://api.escuelajs.co/api/v1/products');
  }
}
