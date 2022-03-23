import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  // private baseURL = 'http://localhost:5000/api/v1/patients';

  constructor(private http: HttpClient) { }

  savePatient(patient: Patient): Observable<any> {
    return this.http.post(environment.API_URL, patient);
  }

  getAllPatients(): Observable<any> {
    return this.http.get(environment.API_URL);
  }

  getPatientById(id: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/${id}`);
  }

  getPatientByDocument(document: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/document/${document}`);
  }
}
