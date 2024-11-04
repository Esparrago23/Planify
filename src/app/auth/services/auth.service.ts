import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';
import { Usuario } from '../../models/usuario';
import { usuario } from '../../models/usuarios';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  register(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/register`, user);
  }

  login(credentials: { nombre_usuario:string;correo: string; contrasena: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.user) {
          localStorage.setItem('user', JSON.stringify(response.user));
        }
      }),
      catchError((error) => {
        console.error("Login failed", error);
        return throwError(error);
      })
    );
  }
  

  getUser(): Usuario | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  clearUser() {
    localStorage.removeItem('user');
  }
  getUsuarios(): Observable<usuario[]> {
    return this.http.get<usuario[]>(`${this.apiUrl}/usuarios`);
  }
}
