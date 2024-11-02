import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth/auth-register/auth-register.component';
import { CategoriasDashboardToggleComponent } from './categorias/categorias-dashboard-toggle/categorias-dashboard-toggle.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'login', component: AuthLoginComponent },
  { path: 'register', component: AuthRegisterComponent },
  {path: 'Home', component: AppComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
