import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiUrl = 'http://localhost:8080/api/fiches'; 

  constructor(private http: HttpClient) {}

  getAllCvs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
