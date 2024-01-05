import { CategoryModels } from "@shared/models/category.models";

export interface ProductModels {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  creationAt: string;
  category: CategoryModels

}
