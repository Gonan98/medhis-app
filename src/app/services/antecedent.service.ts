import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Antecedent } from '../models/Antecedent';

@Injectable({
  providedIn: 'root'
})
export class AntecedentService {

  // private baseURL = 'http://localhost:5000/api/v1/antecedents';

  constructor(private http: HttpClient) { }

  saveAntecedent(antecedent: Antecedent): Observable<any> {
    return this.http.post(environment.API_URL, antecedent);
  }

  getAntecedentsByPatient(patientId: string): Observable<any> {
    return this.http.get(`${environment.API_URL}?patient=${patientId}`);
  }
}
