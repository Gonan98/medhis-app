import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/models/Alert';
import { Patient } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patient: Patient;
  patientList: Patient[];
  alert: Alert;

  constructor(private patientService: PatientService) { 
    this.patient = new Patient();
    this.alert = new Alert();
    this.patientList = [];
  }

  ngOnInit(): void {
    this.loadData();
  }

  onSubmit() {
    this.patientService.savePatient(this.patient).subscribe(
      () => this.loadData(),
      (err) => console.error(err)
    );
    this.patient = new Patient();
  }

  loadData() {
    this.patientService.getAllPatients().subscribe(
      (data) => { this.patientList = data },
      (err) => console.error(err)
    );
  }

}
