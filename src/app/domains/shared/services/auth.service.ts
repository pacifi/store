import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../../environments/environment";
import { retry } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private apiUrl = `${environment.API_URL}/auth`

  constructor() {

  }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, {email, password})
  }

  profile(token: string) {
    return this.http.get(`${this.apiUrl}/profile`)
  }

}
