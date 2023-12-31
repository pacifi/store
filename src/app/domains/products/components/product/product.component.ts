import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModels } from "../../../shared/models/product.models";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input({required: true}) product!: ProductModels;


  @Output() addToCart = new EventEmitter();

  addTOCartHandler() {
    console.log('Click form child');
    this.addToCart.emit(this.product);
  }
}
