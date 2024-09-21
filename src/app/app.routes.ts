import { Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/auth/login/login.component';
import { ProdutosComponent } from './app/produtos/produtos.component';
import { IndexComponent } from './index/index.component';
import { authGuard } from './app/auth/guards/auth.guard';

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
    ],
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
