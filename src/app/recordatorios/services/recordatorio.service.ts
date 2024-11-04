import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recordatorio } from '../../models/recordatorio';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioService {
  private apiUrl = 'http://localhost:8000/recordatorios';

  constructor(private http: HttpClient) {}

  getRecordatorios(): Observable<Recordatorio[]> {
    return this.http.get<Recordatorio[]>(this.apiUrl);
  }

  getRecordatorio(id: number): Observable<Recordatorio> {
    return this.http.get<Recordatorio>(`${this.apiUrl}/${id}`);
  }

  createRecordatorio(recordatorio: Recordatorio): Observable<Recordatorio> {
    return this.http.post<Recordatorio>(this.apiUrl, recordatorio);
  }

  updateRecordatorio(recordatorio: Recordatorio): Observable<Recordatorio> {
    return this.http.put<Recordatorio>(`${this.apiUrl}/${recordatorio.id}`, recordatorio);
  }

  deleteRecordatorio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  sendEmail(recordatorio: Recordatorio): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/send-email`, recordatorio);
}
}
