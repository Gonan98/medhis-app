import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  document = '';
  patient: Patient;
  patientList: Patient[];

  constructor(private patientService: PatientService) { 
    this.patient = new Patient();
    this.patientList = [];
  }

  ngOnInit(): void {
    this.loadData();
  }

  onSearch() {
    this.patientService.getPatientByDocument(this.document).subscribe(
      data => this.patientList = [data],
      err => alert(err.error.message)
    );
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
