import { inject } from "@angular/core"
import { LoginService } from "../login.service"
import { Router } from "@angular/router"

export const authGuard = () => {
  const loginService = inject(LoginService)
  const router = inject(Router)

  if (loginService.usuarioAutenticado()) {
    return true
  } else {
    router.navigateByUrl('/login')
    return false
  }
}