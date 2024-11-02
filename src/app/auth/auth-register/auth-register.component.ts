import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrl: './auth-register.component.css'
})
export class AuthRegisterComponent {
  user: Usuario = {  nombre_usuario:'',correo: '', contrasena: '' };

  constructor(private authService: AuthService,private router:Router) {}

  register() {
    this.authService.register(this.user).subscribe(
      () => alert('Usuario registrado con éxito'),
      (error) => alert('Error al registrar el usuario')
    );
  }
  navigateToLogin() {
    this.router.navigate(['login']);
  }
}
