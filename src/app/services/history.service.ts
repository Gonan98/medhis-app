import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { History } from '../models/History';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private baseURL = 'http://localhost:5000/api/v1/histories';

  constructor(private http: HttpClient) { }

  saveHistory(history: History): Observable<any> {
    return this.http.post(this.baseURL, history);
  }

  getHistoriesByPatient(patientId: string): Observable<any> {
    return this.http.get(`${this.baseURL}?patient=${patientId}`);
  }
}
