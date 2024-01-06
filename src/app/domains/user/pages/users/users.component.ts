import { Component, inject, signal, WritableSignal } from '@angular/core';
import { AuthService } from "@shared/services/auth.service";
import { UserService } from "@shared/services/user.service";
import { UserModels } from "@shared/models/user.models";
import { Router } from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  private authService: AuthService = inject(AuthService);
  private userService: UserService = inject(UserService);
  token = '';
  profile: WritableSignal<UserModels | null> | null = signal<UserModels | null>(null);
  router = inject(Router);

  constructor() {

  }

  createUser() {
    this.userService.create({
      name: 'Bonk',
      email: 'patricio@gmail.com',
      password: '123567',
      avatar: 'https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png'
    }).subscribe(data => {
      console.log(data);
    });
  }

  updateUser() {
    this.userService.update(47, {name: 'Juaquin Bonnier', role: 'admin'})
      .subscribe(data => {
        console.log(data);
      })

  }

  login() {
    this.authService.loginAndGet('patricio@gmail.com', '123567')
      .subscribe(data => {
        console.log(data);
        this.profile?.set(data);
      });
  }

  getProfile() {
    this.authService.profile().subscribe(
      profile => {
        console.log(profile);
      }
    )
  }

  logout() {
    this.authService.logout();
    this.profile?.set(null);
    this.router.navigate(['/'])

  }

}
