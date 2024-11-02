import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Planify';
  constructor(private authService: AuthService,private router: Router){}

  logout() {
    this.authService.clearUser();
    this.router.navigate(['/login']);
  }
  isLoginRoute(): boolean {
    return this.router.url === '/login'; 
  }
}
