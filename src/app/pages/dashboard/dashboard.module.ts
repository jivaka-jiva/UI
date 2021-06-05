import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import {MatCardModule} from '@angular/material/card';
import {FullPageLayoutModule} from '../../full-page-layout/full-page-layout.module';
import {ComponentsModule} from '../../components/components.module';
import {IonicStorageModule} from '@ionic/storage';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {AddPatientComponent} from '../../components/add-patient/add-patient.component';
import {DashboardPage} from './dashboard.page';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    DashboardPageRoutingModule,
    MatCardModule,
    FullPageLayoutModule,
    ComponentsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [DashboardPage, AddPatientComponent],
  entryComponents: [AddPatientComponent]
})
export class DashboardPageModule {}
