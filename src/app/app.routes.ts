import { Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ProdutosComponent } from './app/produtos/produtos.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'app',
    component: AppComponent,
    children: [
      {
        path: 'produtos',
        component: ProdutosComponent,
      }
    ]
  }
];
