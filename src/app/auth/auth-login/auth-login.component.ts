import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.css'
})
export class AuthLoginComponent {
  credentials = { nombre_usuario:'',correo: '', contrasena: '' };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log(this.credentials)
    this.authService.login(this.credentials).subscribe(
      () => this.router.navigate(['/Home']), 
      (error) => alert('Credenciales incorrectas')
    );
  }
  navigateToRegister() {
    this.router.navigate(['register']); 
  }
}
