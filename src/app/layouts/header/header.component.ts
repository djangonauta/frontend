import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../app/auth/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  usuarioAutenticado(): boolean {
    return this.loginService.usuarioAutenticado()
  }

  logout() {
    if (confirm('Deseja sair da aplicação?')) {
      this.loginService.logout()
      this.router.navigateByUrl('')
    }
  }
}
