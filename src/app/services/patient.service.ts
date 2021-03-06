import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = `${environment.API_URL}/patients`;

  constructor(private http: HttpClient) { }

  savePatient(patient: Patient): Observable<any> {
    return this.http.post(this.baseURL, patient);
  }

  getAllPatients(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  getPatientById(id: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getPatientByDocument(document: string): Observable<any> {
    return this.http.get(`${this.baseURL}/document/${document}`);
  }
}
