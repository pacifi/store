import { Component, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component'
import { ProductModels } from "../../../shared/models/product.models";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<ProductModels[]>([]);

  constructor() {
    const initProducts: ProductModels[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: "https://picsum.photos/640/640?r=23",
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: "https://picsum.photos/640/640?r=21",
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: "https://picsum.photos/640/640?r=1",
        creationAt: new Date().toISOString()
      }
    ]
    this.products.set(initProducts);
  }

  fromChild(event: string) {
    console.log("Estamos en el padre");
    console.log(event)


  }
}

