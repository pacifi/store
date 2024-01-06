import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { AuthService } from "@shared/services/auth.service";
import { UserModels } from "@shared/models/user.models";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  authService = inject(AuthService);
  user: WritableSignal<UserModels | null> = signal<UserModels | null>(null);

  ngOnInit(): void {
    this.getProfile();
  }


  private getProfile() {
    this.authService.profile()
      .subscribe(data => {
        this.user.set(data)
      })
  }


}
