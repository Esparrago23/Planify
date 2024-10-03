import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActividadesDashboardComponent } from './actividades/actividades-dashboard/actividades-dashboard.component';
import { CategoriasDashboardToggleComponent } from './categorias/categorias-dashboard-toggle/categorias-dashboard-toggle.component';
import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';
import { FormsModule } from '@angular/forms';
import { ActividadesFormComponent } from './actividades/actividades-form/actividades-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ActividadesDashboardComponent,
    CategoriasDashboardToggleComponent,
    CategoriasFormComponent,
    ActividadesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
