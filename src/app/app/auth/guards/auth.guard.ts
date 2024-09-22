import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router"
import { LoginService } from "../login.service"

@Injectable({
  providedIn: 'root',
})
export class LoginRequired implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.loginService.usuarioAutenticado()) {
      return true
    } else {
      this.router.navigateByUrl('/login')
      return false
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticated implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.loginService.usuarioAutenticado() && route.routeConfig?.path === 'login') {
      this.router.navigateByUrl('/app')
      return false
    }
    return true
  }
}
