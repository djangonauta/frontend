import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.obterAccessToken();
    const authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    return next.handle(authReq);
  }
}

export function provideTokenInterceptor() {
  return { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true };
}