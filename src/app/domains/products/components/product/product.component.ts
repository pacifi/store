import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModels } from "../../../shared/models/product.models";
import { CurrencyPipe, DatePipe, UpperCasePipe } from "@angular/common";
import { ReversePipe } from "@shared/pipes/reverse.pipe";
import { TimeAgoPipe } from "@shared/pipes/time-ago.pipe";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    ReversePipe,
    TimeAgoPipe,
    RouterLink
  ],
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
