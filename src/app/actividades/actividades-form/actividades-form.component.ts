import { Component,Output,EventEmitter } from '@angular/core';
import { Actividad } from '../../models/actividad';
@Component({
  selector: 'app-actividades-form',
  templateUrl: './actividades-form.component.html',
  styleUrl: './actividades-form.component.css'
})
export class ActividadesFormComponent {
  nuevaActividad: Actividad={
    id:0,
    titulo:'',
    prioridad:'media',
    estado:'pendiente',
    fechaInicio: "",
    fechaFin: "",
    categoria_id:0
  };
  @Output() actividadAgregada  = new EventEmitter<Actividad>();

  onAgregarActividad(): void {
    if (this.nuevaActividad.titulo.trim() !== '') {
      this.actividadAgregada.emit(this.nuevaActividad);
      this.nuevaActividad = {
        id:0,
        titulo:'',
        prioridad:'media',
        estado:'pendiente',
        fechaInicio: "",
        fechaFin: "",
        categoria_id:0
      };
    }
  }
}
