import { Routes } from '@angular/router';
import { ListComponent } from '@products/pages/list/list.component'
import { NotFoundComponent } from "./domains/info/pages/not-found/not-found.component";
import { LayoutComponent } from "@shared/components/layout/layout.component";
import { ProductDetailComponent } from "@products/pages/product-detail/product-detail.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./domains/products/pages/list/list.component').then(m => m.ListComponent)
      },
      {
        path: 'about',
        // cuando ponemos en default la clase nos ahorramos el then como se ve arriba y abajo
        loadComponent: () => import('./domains/info/pages/about/about.component')
      },
      {
        path: 'product/:id',
        loadComponent: () => import('./domains/products/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
      }
    ]
  }
  ,
  {
    path: '**',
    component: NotFoundComponent
  }
];
