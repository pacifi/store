import { CategoryModels } from "@shared/models/category.models";

export interface ProductModels {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  creationAt: string;
  category: CategoryModels

}

export interface ProductModelsDTOCreate extends Omit<ProductModels, 'id' | 'category' | 'creationAt'> {
  categoryId: number;
}

export interface ProductModelDtoUpdate extends Partial<ProductModelsDTOCreate> {

}
