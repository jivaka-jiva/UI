import { Component, OnDestroy, OnInit } from '@angular/core';
import { SimpleCard } from '../../shared/interfaces/simple-card';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { IPatient } from '../../shared/interfaces/IPatient';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { APP_TEXT } from '../../shared/appText';
import { MatOption } from '@angular/material/core';
import { ModalController } from '@ionic/angular';
import { AddPatientComponent } from '../../components/add-patient/add-patient.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  cards: SimpleCard[] = [];
  myControl = new FormControl();
  filteredPatients: Observable<string[]>;
  patients: IPatient[] = [
    { id: 'FSFDS2242EW', name: 'Patient 1' },
    { id: 'DSFJD7642FS', name: 'Patient 2' },
    { id: 'KDSFJ7322FG', name: 'Patient 3' },
    { id: 'PYTUT6552HG', name: 'Patient 4' },
  ];
  constructor(private router: Router, private storage: Storage, private dialog: MatDialog) {}

  ngOnInit() {
    this.initializeCards().then();
    this.filteredPatients = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    let results = this.patients
      .filter((option) => option.id.toLowerCase().includes(filterValue))
      .map((searchedPatient) => searchedPatient.id);
    if (results.length < 1) {
      results = [APP_TEXT.patientQuestion + '"' + value + '" ?'];
    }
    return results;
  }

  ionViewWillEnter() {
    this.initializeCards().then();
  }

  async initializeCards() {
    this.cards = [
      {
        value: parseInt(await this.storage.get('total_fees_this_month'), 10) || 0,
        cardColor: 'bg-green-200',
        colClasses: {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6,
        },
        type: 'currency',
        title: 'Fees this month',
        icon: 'fa fa-rupee-sign',
        viewMoreLink: '/dashboard',
      },
      {
        value: parseInt(await this.storage.get('total_procedures'), 10) || 0,
        cardColor: 'bg-blue-200',
        colClasses: {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6,
        },
        type: 'value',
        title: 'Total Procedures',
        icon: 'fa fa-stethoscope',
        viewMoreLink: '/dashboard',
      },
    ];
    // TODO: for demo purpose
    const hospitals = await this.storage.get('hospitals');
    await hospitals.forEach(async (hospital) => {
      const hospitalCard = {
        value: parseInt(await this.storage.get('total_fees_this_month'), 10) || 0,
        cardColor: 'bg-cyan-200',
        colClasses: {
          xs: 6,
          sm: 4,
          md: 4,
          lg: 3,
          xl: 3,
        },
        type: 'currency',
        title: 'Hospital 1',
        icon: 'fa fa-hospital-symbol',
        viewMoreLink: '/dashboard',
      };
      const hospitalValue = await this.storage.get(hospital);
      hospitalCard.value = parseInt(hospitalValue, 10) || 0;
      hospitalCard.title = hospital;
      this.cards.push(hospitalCard);
    });
  }

  optionSelected(option: MatOption) {
    if (option.value.includes(APP_TEXT.patientQuestion)) {
      this.addPatient(option.value.split('"')[1]);
    }
  }

  addPatient(newName: string) {
    const dialogRef = this.dialog.open(AddPatientComponent, {
      data: { patientId: newName },
    });
  }
}
