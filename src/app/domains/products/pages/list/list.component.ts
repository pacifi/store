import { Component, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component'
import { ProductModels } from "../../../shared/models/product.models";
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<ProductModels[]>([]);
  cart = signal<ProductModels[]>([]);

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
      },
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

  addToCard(product: ProductModels) {
    this.cart.update((prevState:ProductModels[]) => [...prevState, product])

  }
}

