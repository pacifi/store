import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModels } from '@shared/models/category.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);

  constructor() {
  }
  getAll(){
    return this.http.get<CategoryModels[]>(`https://api.escuelajs.co/api/v1/categories/`)
  }
}
