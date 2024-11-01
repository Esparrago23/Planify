import { Component,Output,EventEmitter } from '@angular/core';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrl: './categorias-form.component.css'
})
export class CategoriasFormComponent {
  mostrarFormularioCategoria: boolean=false;
  nuevaCategoria: Categoria ={
    id:0,
    nombre:"",
    descripcion:"",
    color:"#000000"
  }

  @Output() categoriaAgregada = new EventEmitter<Categoria>();
  toggleFormularioCategorias(): void{
    this.mostrarFormularioCategoria = !this.mostrarFormularioCategoria;
  }

  agregarCategoria(): void {
    
    if (this.nuevaCategoria.nombre.trim() !== '') {
      this.categoriaAgregada.emit(this.nuevaCategoria);
      this.nuevaCategoria ={
        id:0,
        nombre:"",
        descripcion:"",
        color:"#000000"
      }
      
      this.mostrarFormularioCategoria = false;
    }
  }
}
