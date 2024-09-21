import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Credential, Token } from '../../types/types';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) { }

  autenticar(credenciais: Credential) {
    return this.httpClient.post<Token>(environment.tokenUrl, credenciais)
  }

  usuarioAutenticado(): boolean {
    return !!this.tokenService.obterAccessToken()
  }

  logout() {
    this.tokenService.limpar()
  }
}
