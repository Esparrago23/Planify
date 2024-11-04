import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../../models/categoria';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url_base: string = "http://3.228.179.128:8000/categorias/"

  constructor(private _http: HttpClient) { }

  getAllCategorias():Observable<Categoria[]>{
    return this._http.get<Categoria[]>(this.url_base)
  }
  getCategoriaById(id: number): Observable<Categoria> {
    return this._http.get<Categoria>(`${this.url_base}/${id}`);
  }

  createCategoria(categoria: Categoria): Observable<Categoria> {
    return this._http.post<Categoria>(this.url_base, categoria);
  }

  updateCategoria(id: number, categoria: Categoria): Observable<Categoria> {
    return this._http.put<Categoria>(`${this.url_base}${id}`, categoria);
  }

  deleteCategoria(id: number): Observable<void> {
    return this._http.delete<void>(`${this.url_base}${id}`);
  }
}

