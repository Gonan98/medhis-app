import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './components/patients/patients.component';
import { HistoryComponent } from './components/history/history.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AntecedentComponent } from './components/antecedent/antecedent.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { InfoMessageComponent } from './components/info-message/info-message.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    HistoryComponent,
    AntecedentComponent,
    PatientDetailComponent,
    InfoMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
