import { Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginRequired, UserAuthenticated } from './app/auth/guards/auth.guard';
import { LoginComponent } from './app/auth/login/login.component';
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
    ],
    canActivate: [LoginRequired],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UserAuthenticated],
  }
];
