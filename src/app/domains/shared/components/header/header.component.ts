import { Component, inject, Input, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { ProductModels } from "../../models/product.models";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  hideSideMenu = signal(true);

  private cartService = inject(CartService);

  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

}
