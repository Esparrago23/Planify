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
  editingActivity: any = null;
  @Input() actividades: Actividad[] = [];
  @Output() agregarActividad = new EventEmitter<Actividad>();
  
  onAgregarActividad(nuevaActividad: Actividad): void {
    if (nuevaActividad.titulo.trim() !== '') {
      nuevaActividad.id = Date.now();
      this.agregarActividad.emit(nuevaActividad);
    }
  }
 
  onEliminarActividad(id_categoria:number, idAct:number): void {
    const datosGuardados = this.storageService.obtenerDatos('categorias');
    if(datosGuardados&& datosGuardados[id_categoria] && datosGuardados[id_categoria].actividades){
      datosGuardados[id_categoria].actividades = datosGuardados[id_categoria].actividades.filter((actividad:any)=> actividad.id !== idAct);
      this.storageService.guardarDatos('categorias',datosGuardados);
      this.actividades=this.actividades.filter((actividad:any)=>actividad.id!==idAct);
    }
  }

  onEditarActividad(id_categoria: number, idAct: number): void {
    const datosGuardados = this.storageService.obtenerDatos('categorias');
    if (datosGuardados && datosGuardados[id_categoria] && datosGuardados[id_categoria].actividades) {
      const actividad = datosGuardados[id_categoria].actividades.find((act: any) => act.id === idAct);
      if (actividad) {
        this.editingActivity = { ...actividad };
      }
    }
  }

  onGuardarCambios(): void {
    const datosGuardados = this.storageService.obtenerDatos('categorias');
  if (datosGuardados && datosGuardados[this.editingActivity.categoriaId]) {
    const actividades = datosGuardados[this.editingActivity.categoriaId].actividades;
    const actividad = actividades.find((act: any) => act.id === this.editingActivity.id);
    
    if (actividad) {
      console.log(actividad); 
      actividad.titulo = this.editingActivity.titulo; 
      actividad.prioridad = this.editingActivity.prioridad; 
      actividad.fechaInicio = this.editingActivity.fechaInicio; 
      actividad.fechaFin = this.editingActivity.fechaFin; 
      this.storageService.guardarDatos('categorias', datosGuardados); 
      this.actividades = actividades; 
      this.editingActivity = null; 
    }
  }
  }

  onCancelarEdicion(): void {
    this.editingActivity = null;
  }
}
