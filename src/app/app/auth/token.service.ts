import { Injectable } from '@angular/core';
import { Token } from '../../types/types';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly ACCESS = 'access'
  private readonly REFRESH = 'refresh'

  constructor(
    private httpClient: HttpClient,
  ) { }

  armazenarToken(token: Token) {
    localStorage.setItem(this.ACCESS, token.access)
    localStorage.setItem(this.REFRESH, token.refresh)
  }

  obterAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS)
  }

  obterRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH)
  }

  verificarToken() {
    return this.httpClient.post<String>(`${environment.tokenUrl}verify/`, { token: this.obterAccessToken() })
  }

  atualizarToken(complete: (() => void) | undefined, error: ((err: any) => void) | undefined) {
    return this.httpClient.post<{ access: string }>(
      `${environment.tokenUrl}refresh/`,
      { refresh: this.obterRefreshToken() }
    ).subscribe({
      next: (token) => {
        localStorage.setItem(this.ACCESS, token.access)
      },
      error: error,
      complete: complete
    })
  }

  limpar() {
    localStorage.removeItem(this.ACCESS)
    localStorage.removeItem(this.REFRESH)
  }
}
