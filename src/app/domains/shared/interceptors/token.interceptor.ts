import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { TokenService } from "@shared/services/token.service";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let tokenService = inject(TokenService);

  const authReq = req.clone({
    'headers': req.headers.set('Authorization', `Bearer ${tokenService.getToken()}`)
  })
  return next(authReq);
};
