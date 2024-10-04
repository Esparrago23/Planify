import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasDashboardToggleComponent } from './categorias-dashboard-toggle/categorias-dashboard-toggle.component';
import { CategoriasFormComponent } from './categorias-form/categorias-form.component';
import { FormsModule } from '@angular/forms';
import { ActividadesModule } from '../actividades/actividades.module';



@NgModule({
  declarations: [
    CategoriasDashboardToggleComponent,
    CategoriasFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ActividadesModule
  ],
  exports:[
    CategoriasFormComponent,
    CategoriasDashboardToggleComponent
  ]

})
export class CategoriasModule { }
