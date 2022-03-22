import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AntecedentComponent } from './components/antecedent/antecedent.component';
import { HistoryComponent } from './components/history/history.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { PatientsComponent } from './components/patients/patients.component';

const routes: Routes = [
  { path: '', redirectTo: 'pacientes', pathMatch: 'full' },
  { path: 'pacientes', component: PatientsComponent },
  { path: 'historia', component: HistoryComponent },
  { path: 'antecedente', component: AntecedentComponent },
  { path: 'paciente/:id', component: PatientDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
