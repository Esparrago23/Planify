import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../../models/categoria';
import { Actividad } from '../../models/actividad';
import { ActividadService } from '../../actividades/services/actividad.service';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-dashboard-toggle',
  templateUrl: './categorias-dashboard-toggle.component.html',
  styleUrl: './categorias-dashboard-toggle.component.css'
})

export class CategoriasDashboardToggleComponent implements OnInit{
  categorias: Categoria[] =[];
  actividades: Actividad[]=[];
  mostrarDashboard: boolean[] = [];
  editingCategoria: any = null;

  constructor(private categoriasService:CategoriaService,private actividadesService: ActividadService,private authService: AuthService,private router: Router){}
  ngOnInit(): void {
      this.cargarCategorias();
      this.cargarActividades();
  }
  cargarCategorias():void{
    this.categoriasService.getAllCategorias().subscribe(data=>{
      this.categorias=data;
    })
  }
  cargarActividades():void{
    this.actividadesService.getAllActividades().subscribe(data=>{
      this.actividades=data;
      console.log(this.actividades)
    })
  }
  toggleDashboard(index: number): void {
    this.mostrarDashboard[index] = !this.mostrarDashboard[index];
  }
  agregarCategoria(nuevaCategoria: Categoria): void {
    this.categoriasService.createCategoria(nuevaCategoria).subscribe(()=>{
      this.cargarCategorias();
    })
  }
  
  eliminarCategoria(index:number):void{
    console.log(index)
    this.categoriasService.deleteCategoria(index).subscribe(()=>{
      this.cargarCategorias();
    })
   
  }    
  editarCategoria(categoriaUpdate:Categoria): void {
    this.editingCategoria={...categoriaUpdate}
  }
  guardarCambios():void{
    this.categoriasService.updateCategoria(this.editingCategoria.id,this.editingCategoria).subscribe(()=>{
      this.cargarCategorias();
    })
    this.editingCategoria = null; 
  }
  agregarActividad(idCategoria: number,actividad:Actividad): void {
    actividad.categoria_id=idCategoria;
    console.log(actividad)
    this.actividadesService.createActividad(actividad).subscribe(()=>{
      this.cargarCategorias();
    })
    
  }
  onCancelarEdicion(): void {
    this.editingCategoria = null;
  }

 
}























/*import { Component,OnInit } from '@angular/core';
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
  editingCategoria: any = null;
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
  editarCategoria(index: number): void {
    const categoria = this.categorias[index];
    if (categoria) {
      this.editingCategoria = { ...categoria }; 
    }
  }
  guardarCambios():void{
    const datosGuardados = this.storageService.obtenerDatos('categorias');
    const categoria = datosGuardados.find((cat: any) => cat.id === this.editingCategoria.id_categoria);
    categoria.nombre = this.editingCategoria.nombre;
    categoria.descripcion =this.editingCategoria.descripcion;
    categoria.color=this.editingCategoria.color;
    this.storageService.guardarDatos('categorias', datosGuardados); 
    this.categorias = datosGuardados; 
    this.editingCategoria = null; 
  }
  agregarActividad(idCategoria: number, actividad: Actividad): void {
    actividad.categoriaId=idCategoria
    this.categorias[idCategoria].actividades.push(actividad);
    this.storageService.guardarDatos('categorias', this.categorias);
  }
  onCancelarEdicion(): void {
    this.editingCategoria = null;
  }
  
}
*/
