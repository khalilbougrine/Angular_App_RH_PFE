import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FicheCandidatService {
  private apiUrl = 'http://localhost:8080/api/fiches'; 

  constructor(private http: HttpClient) {}

  // Récupérer la fiche par ID
  getFicheById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Optionnel : Récupérer la fiche par nom de fichier
  getFicheByNomFichier(nomFichier: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/file/${encodeURIComponent(nomFichier)}`);
  }
}
