import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CategoriasModule } from './categorias/categorias.module';
import { ActividadesModule } from './actividades/actividades.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CategoriasModule,
    ActividadesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
