import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../login.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup
  error: any

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private tokenService: TokenService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
      ])],
      password: ['', Validators.compose([
        Validators.required,
      ])]
    })
  }

  login() {
    this.loginService.autenticar(this.loginForm.value).subscribe({
      next: (token) => {
        console.log(token)
        this.tokenService.armazenarToken(token)
        this.router.navigateByUrl('/app')
      },
      error: (err) => {
        console.log(err)
        this.error = err.error
      }
    })
  }
}
