import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../../environments/environment";

import { AuthModels } from "@shared/models/auth.modes";
import { UserModels } from "@shared/models/user.models";
import { TokenService } from "@shared/services/token.service";

import { data } from "autoprefixer";
import { switchMap, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient = inject(HttpClient);
  private tokenService: TokenService = inject(TokenService);
  private user: WritableSignal<UserModels | null> = signal<UserModels | null>(null)

  private apiUrl = `${environment.API_URL}/auth`

  constructor() {

  }

  login(email: string, password: string) {
    return this.http.post<AuthModels>(`${this.apiUrl}/login`, {email, password})
      .pipe(tap({
        next: (data => this.tokenService.saveToken(data.access_token)),
        error: error => console.log(error)
      }))
      ;
  }

  profile() {
    //const headers = new HttpHeaders();
    //headers.set('Authorization', `Bearer ${token}`);
    // y le enviamos solo los headers
    /*return this.http.get<UserModels>(`${this.apiUrl}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    });*/

    return this.http.get<UserModels>(`${this.apiUrl}/profile`).pipe(
      tap({
        next: (user => this.user.set(user)),
        error: err => console.log(err)
      })
    );
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
      .pipe(
        switchMap(() => this.profile())
      );
  }

  logout() {
    this.tokenService.removeToken();
  }

}
