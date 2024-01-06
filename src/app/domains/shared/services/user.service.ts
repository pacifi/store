import { inject, Injectable } from '@angular/core';
import { UserModels, UserModelsDtoCreate, UserModelsDtoUpdate } from "@shared/models/user.models";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  private apiUrl = `${environment.API_URL}/users`

  constructor() {
  }


  create(dto: UserModelsDtoCreate) {
    return this.http.post<UserModels>(this.apiUrl, dto);
  }

  getAll() {
    return this.http.get<UserModels[]>(this.apiUrl);
  }

  update(id: number, dto: UserModelsDtoUpdate) {
    return this.http.put<UserModels>(`${this.apiUrl}/${id}`, dto);
  }
}
