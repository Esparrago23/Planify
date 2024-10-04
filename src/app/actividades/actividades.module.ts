import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadesDashboardComponent } from './actividades-dashboard/actividades-dashboard.component';
import { ActividadesFormComponent } from './actividades-form/actividades-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ActividadesDashboardComponent,
    ActividadesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ActividadesDashboardComponent,
    ActividadesFormComponent
  ]
})
export class ActividadesModule { }
