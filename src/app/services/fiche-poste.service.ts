// fiche-poste.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FichePosteService {
  private apiUrl = 'http://localhost:8080/api/postes';

  constructor(private http: HttpClient) {}

  getAllFiches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
