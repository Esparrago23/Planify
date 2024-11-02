import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordatoriosDashboardComponent } from './recordatorios-dashboard/recordatorios-dashboard.component';
import { RecordatoriosFormsComponent } from './recordatorios-forms/recordatorios-forms.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecordatoriosDashboardComponent,
    RecordatoriosFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    RecordatoriosDashboardComponent,
    RecordatoriosFormsComponent  
  ]
})
export class RecordatoriosModule { }
