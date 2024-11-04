import { Component, EventEmitter, Output,Input  } from '@angular/core';
import { Recordatorio } from '../../models/recordatorio';
@Component({
  selector: 'app-recordatorios-forms',
  templateUrl: './recordatorios-forms.component.html',
  styleUrl: './recordatorios-forms.component.css'
})
export class RecordatoriosFormsComponent {

  @Input() recordatorio: Recordatorio | null = null; 
  @Output() recordatorioCreado = new EventEmitter<Recordatorio>();

  newRecordatorio: Recordatorio = {
    id:0,
    titulo: '',
    fecha_hora: "",
    repeticion: 'ninguna',
    estado: 'activo',
    nota_adicional:"",
    actividad_id:0,
    correo:""
  };

  ngOnChanges(): void {
    if (this.recordatorio) {
      this.newRecordatorio = { ...this.recordatorio }; 
    } else {
      this.resetForm(); 
    }
  }

  createRecordatorio(): void {
    console.log(this.newRecordatorio)
    this.recordatorioCreado.emit(this.newRecordatorio);
    this.resetForm();
  }

  resetForm(): void {
    this.newRecordatorio = {
      id:0,
      titulo: '',
      fecha_hora:"",
      repeticion: 'ninguna',
      estado: 'activo',
      nota_adicional:"",
      actividad_id:0,
      correo:""
    };
  }
}

