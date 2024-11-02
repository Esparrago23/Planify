import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthRegisterComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AuthLoginComponent,
    AuthRegisterComponent
  ]
})
export class AuthModule { }
