import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Antecedent } from '../models/Antecedent';

@Injectable({
  providedIn: 'root'
})
export class AntecedentService {

  private baseURL = 'http://localhost:5000/api/v1/antecedents';

  constructor(private http: HttpClient) { }

  saveAntecedent(antecedent: Antecedent): Observable<any> {
    return this.http.post(this.baseURL, antecedent);
  }

  getAntecedentsByPatient(patientId: string): Observable<any> {
    return this.http.get(`${this.baseURL}?patient=${patientId}`);
  }
}
