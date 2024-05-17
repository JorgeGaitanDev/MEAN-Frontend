import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informe } from '../models/informe';


@Injectable({
  providedIn: 'root'
})
export class InformeService {
  url = 'http://localhost:4000/api/informes/';

  constructor(private http: HttpClient) { }

  getInformes(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarInforme(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarInforme(informe: Informe): Observable<any> {
    return this.http.post(this.url, informe);
  }

  obtenerInforme(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarInforme(id: string, informe: Informe): Observable<any> {
    return this.http.put(this.url + id, informe);
  }
}
