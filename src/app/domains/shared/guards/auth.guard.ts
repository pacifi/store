import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from "@shared/services/token.service";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {

  let tokenService = inject(TokenService);
  let router = inject(Router);
  let token = tokenService.getToken();

  if (!token) {
    router.navigate(['/']);
    return false
  }
  return true;
};
