import { Injectable } from '@angular/core';
import { Token } from '../../types/types';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly ACCESS = 'access'
  private readonly REFRESH = 'refresh'

  constructor() { }

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

  limpar() {
    localStorage.removeItem(this.ACCESS)
    localStorage.removeItem(this.REFRESH)
  }
}
