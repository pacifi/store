import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductModelDtoUpdate, ProductModels, ProductModelsDTOCreate } from "../models/product.models";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private http = inject(HttpClient)

  private apiUrl = `${environment.API_URL}/products/`

  constructor(private http: HttpClient) {
  }

  getProducts(category_id?: string) {
    const url = new URL(`${this.apiUrl}`);
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<ProductModels[]>(url.toString());
  }

  getOne(id: string) {
    return this.http.get<ProductModels>(`${this.apiUrl}${id}`)

  }

  getProductsByPage(limit: number, offset: number) {
    return this.http.get<ProductModels[]>(`${this.apiUrl}`, {
      params: {limit, offset}
    });
  }

  create(dto: ProductModelsDTOCreate) {
    return this.http.post<ProductModels>(this.apiUrl, dto);
  }

  update(id: number, dto: ProductModelDtoUpdate) {
    return this.http.put<ProductModels>(`${this.apiUrl}${id}`, dto);
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.apiUrl}${id}`);
  }
}
