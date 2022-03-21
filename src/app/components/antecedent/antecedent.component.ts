import { Component, OnInit } from '@angular/core';
import { Antecedent } from 'src/app/models/Antecedent';
import { AntecedentService } from 'src/app/services/antecedent.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-antecedent',
  templateUrl: './antecedent.component.html',
  styleUrls: ['./antecedent.component.css']
})
export class AntecedentComponent implements OnInit {

  documentNumber: string;
  antecedent: Antecedent;

  constructor(
    private antecedentService: AntecedentService,
    private patientService: PatientService
  ) {
    this.documentNumber = '';
    this.antecedent = new Antecedent();
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.patientService.getPatientByDocument(this.documentNumber).subscribe(
      res => this.addAntecedent(res._id),
      console.error
     );
  }

  addAntecedent(patientId: string) {
    this.antecedent.patient = patientId;
    console.log(this.antecedent)
    this.antecedentService.saveAntecedent(this.antecedent).subscribe(
      console.log,
      console.error
    );
    this.antecedent = new Antecedent();
  }

}
