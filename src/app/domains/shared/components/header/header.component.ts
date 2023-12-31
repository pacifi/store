import { Component, Input, signal } from '@angular/core';
import { ProductModels } from "../../models/product.models";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  hideSideMenu = signal(true);
  @Input({required: true}) cart: ProductModels[] = [];

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

}
