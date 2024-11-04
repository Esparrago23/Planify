import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actividad } from '../../models/actividad';
@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  url_base: string = "http://3.228.179.128:8000/actividades/"

  constructor(private _http: HttpClient) { }

  getAllActividades():Observable<Actividad[]>{
    return this._http.get<Actividad[]>(this.url_base)
  }
  getActividadById(id: number): Observable<Actividad> {
    return this._http.get<Actividad>(`${this.url_base}/${id}`);
  }

  createActividad(actividad: Actividad): Observable<Actividad> {
    return this._http.post<Actividad>(this.url_base, actividad);
  }

  updateActividad(id: number, actividad: Actividad): Observable<Actividad> {
    return this._http.put<Actividad>(`${this.url_base}${id}`, actividad);
  }

  deleteActividad(id: number): Observable<void> {
    return this._http.delete<void>(`${this.url_base}${id}`);
  }
}
