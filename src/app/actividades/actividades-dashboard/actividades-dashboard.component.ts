import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Actividad } from '../../models/actividad';
import { StorageService } from '../../storage.service';
@Component({
  selector: 'app-actividades-dashboard',
  templateUrl: './actividades-dashboard.component.html',
  styleUrl: './actividades-dashboard.component.css'
})
export class ActividadesDashboardComponent {
  constructor(private storageService: StorageService) { }
  
  @Input() actividades: Actividad[] = [];
  @Output() agregarActividad = new EventEmitter<Actividad>();
  
  onAgregarActividad(nuevaActividad: Actividad): void {
    if (nuevaActividad.titulo.trim() !== '') {
      nuevaActividad.id = Date.now();
      this.agregarActividad.emit(nuevaActividad);
    }
  }
 
  onEliminarActividad(index:number): void {
    const datosGuardados = this.storageService.obtenerDatos('categorias');
    console.log(datosGuardados)
    

  }
}
