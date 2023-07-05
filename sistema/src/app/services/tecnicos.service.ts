import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
  private apiUrl = 'http://localhost:4000/api/tecnicos'; // Cambia la URL según tu API

  constructor(private http: HttpClient) { }

  obtenerTecnicos(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(this.apiUrl);
  }

  obtenerTecnicoPorId(id: string): Observable<Tecnico> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Tecnico>(url);
  }

  crearTecnico(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.post<Tecnico>(this.apiUrl, tecnico);
  }

  actualizarTecnico(id: string, tecnico: Tecnico): Observable<Tecnico> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Tecnico>(url, tecnico);
  }

  eliminarTecnico(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}