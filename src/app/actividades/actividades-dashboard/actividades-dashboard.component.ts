import { Component, Input, Output, EventEmitter,OnInit} from '@angular/core';
import { Actividad } from '../../models/actividad';
import { ActividadService } from '../services/actividad.service';
@Component({
  selector: 'app-actividades-dashboard',
  templateUrl: './actividades-dashboard.component.html',
  styleUrl: './actividades-dashboard.component.css'
})
export class ActividadesDashboardComponent implements OnInit {
  constructor(private actividadService:ActividadService) { }
  editingActivity: any = null;
  actividad:any = null;
  @Input() categoriaId!: number;
  @Input() actividades: Actividad[] = [];
  @Output() agregarActividad = new EventEmitter<Actividad>();
  
  ngOnInit(): void {
      this.cargarActividades();
  }
  cargarActividades():void{
    this.actividadService.getAllActividades().subscribe(data=>{
      this.actividades=data
    })
  }
  
  onEliminarActividad( idAct:number): void {
    this.actividadService.deleteActividad(idAct).subscribe(()=>{
      this.cargarActividades();
    })
  }

  onEditarActividad(actividads: Actividad): void {
   this.editingActivity={...actividads}
  }
  

  onGuardarCambios(): void {
    this.actividadService.updateActividad(this.editingActivity.id,this.editingActivity).subscribe(()=>{
      this.cargarActividades();
    })
    this.editingActivity = null;
  }

  onCancelarEdicion(): void {
    this.editingActivity = null;
  }
}
