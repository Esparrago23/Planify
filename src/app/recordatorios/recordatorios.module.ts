import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordatoriosDashboardComponent } from './recordatorios-dashboard/recordatorios-dashboard.component';
import { RecordatoriosFormsComponent } from './recordatorios-forms/recordatorios-forms.component';



@NgModule({
  declarations: [
    RecordatoriosDashboardComponent,
    RecordatoriosFormsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RecordatoriosDashboardComponent,
    RecordatoriosFormsComponent  
  ]
})
export class RecordatoriosModule { }
