import { Component,Output,EventEmitter } from '@angular/core';
import { Actividad } from '../../models/actividad';
@Component({
  selector: 'app-actividades-form',
  templateUrl: './actividades-form.component.html',
  styleUrl: './actividades-form.component.css'
})
export class ActividadesFormComponent {
  nuevaActividad: Actividad = new Actividad(
    0,
    '',
    'Media',
    'Pendiente',
    new Date(),
    new Date(),
    0
  );
  @Output() actividadAgregada  = new EventEmitter<Actividad>();

  onAgregarActividad(): void {
    if (this.nuevaActividad.titulo.trim() !== '') {
      this.actividadAgregada.emit(this.nuevaActividad);
      this.nuevaActividad = new Actividad(
        this.nuevaActividad.id+1,
        '',
        'Media',
        'Pendiente',
        new Date(),
        new Date(),
        0
      );
    }
  }
}
