import { Component, OnInit } from '@angular/core';
import { Recordatorio } from '../../models/recordatorio';
import { RecordatorioService } from '../services/recordatorio.service';
@Component({
  selector: 'app-recordatorios-dashboard',
  templateUrl: './recordatorios-dashboard.component.html',
  styleUrl: './recordatorios-dashboard.component.css'
})
export class RecordatoriosDashboardComponent implements OnInit {
  recordatorios: Recordatorio[] = [];
  mostrarFormulario: boolean = false;
  recordatorioParaEditar: Recordatorio | null = null; 

  constructor(private recordatorioService: RecordatorioService) {}

  ngOnInit(): void {
    this.loadRecordatorios();
  }

  loadRecordatorios(): void {
    this.recordatorioService.getRecordatorios().subscribe((data) => {
      this.recordatorios = data;
    });
  }

  deleteRecordatorio(id: number): void {
    this.recordatorioService.deleteRecordatorio(id).subscribe(() => {
      this.loadRecordatorios();
    });
  }

  editRecordatorio(recordatorio: Recordatorio): void {
    this.recordatorioParaEditar = { ...recordatorio };
    this.mostrarFormulario = true;
  }

  onRecordatorioCreado(recordatorio: Recordatorio): void {
    if (recordatorio.id) {
      this.recordatorioService.updateRecordatorio(recordatorio).subscribe(() => {
        this.loadRecordatorios();
        this.toggleFormulario();
      });
    } else {
      this.recordatorioService.createRecordatorio(recordatorio).subscribe(() => {
        this.loadRecordatorios();
        this.toggleFormulario();
      });
    }
  }

  toggleFormulario(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
    this.recordatorioParaEditar = null; 
  }

  
}
