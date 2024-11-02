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
    color:"#000000",
    usuario_id:0
  }

  @Output() categoriaAgregada = new EventEmitter<Categoria>();
  toggleFormularioCategorias(): void{
    this.mostrarFormularioCategoria = !this.mostrarFormularioCategoria;
  }

  agregarCategoria(): void {

    if (this.nuevaCategoria.nombre.trim() !== '') {
      console.log(this.nuevaCategoria)
      this.categoriaAgregada.emit(this.nuevaCategoria);
      this.nuevaCategoria ={
        id:0,
        nombre:"",
        descripcion:"",
        color:"#000000",
        usuario_id:0
      }
      
      this.mostrarFormularioCategoria = false;
    }
  }
}
