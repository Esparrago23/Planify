import { Component,OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { Actividad } from '../../models/actividad';
import { StorageService } from '../../storage.service';
@Component({
  selector: 'app-categorias-dashboard-toggle',
  templateUrl: './categorias-dashboard-toggle.component.html',
  styleUrl: './categorias-dashboard-toggle.component.css'
})
export class CategoriasDashboardToggleComponent  implements OnInit{
  categorias: Categoria[] = [];
  mostrarDashboard: boolean[] = [];

  constructor(private storageService: StorageService) { }
 
  ngOnInit(): void {
    const datosGuardados = this.storageService.obtenerDatos('categorias');
    if (datosGuardados) {
      this.categorias = datosGuardados.map((cat: any) => {
        const actividades = cat.actividades.map((act: any) => new Actividad(
          act.id,
          act.titulo,
          act.prioridad,
          act.estado,
          new Date(act.fechaInicio),
          new Date(act.fechaFin),
          act.categoriaId
        ));
        return new Categoria(cat.id, cat.nombre, cat.descripcion, cat.color, actividades);
      });
    } else {
      this.categorias = [];
    }
    this.mostrarDashboard = this.categorias.map(() => false);
  }

  toggleDashboard(index: number): void {
    this.mostrarDashboard[index] = !this.mostrarDashboard[index];
  }
  

  agregarCategoria(nuevaCategoria: Categoria): void {
    this.categorias.push(new Categoria(
      this.categorias.length,
      nuevaCategoria.nombre,
      nuevaCategoria.descripcion,
      nuevaCategoria.color,
      []
    ));
    this.storageService.guardarDatos('categorias', this.categorias);
    this.mostrarDashboard.push(false);
  }
  eliminarCategoria(index:number):void{
    let datosGuardados = this.storageService.obtenerDatos('categorias');
    datosGuardados=datosGuardados.filter((categoria:any)=> categoria.id_categoria !== index)
    this.storageService.guardarDatos('categorias',datosGuardados);
    this.categorias=this.categorias.filter((categoria:any)=> categoria.id_categoria !== index)
  }    
  agregarActividad(idCategoria: number, actividad: Actividad): void {
    actividad.categoriaId=idCategoria
    this.categorias[idCategoria].actividades.push(actividad);
    this.storageService.guardarDatos('categorias', this.categorias);
  }

  
}

