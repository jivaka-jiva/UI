import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITreatment } from '../../shared/interfaces/treatment';
import { FormControl } from '@angular/forms';
import { debounceTime, delay } from 'rxjs/operators';
import { IHospital } from '../../shared/interfaces/hospital';
import { Observable, Observer, of } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { TreatmentsService } from '../../shared/services/treatments.service';

// for mocking data
const NAMES = [
  'Harry',
  'Ross',
  'Bruce',
  'Cook',
  'Carolyn',
  'Morgan',
  'Albert',
  'Walker',
  'Randy',
  'Reed',
  'Larry',
  'Barnes',
  'Lois',
  'Wilson',
  'Jesse',
  'Campbell',
  'Ernest',
  'Rogers',
  'Theresa',
  'Patterson',
  'Henry',
  'Simmons',
  'Michelle',
  'Perry',
  'Frank',
  'Butler',
  'Shirley',
];
const IDENTIFIERS = ['Chemo', 'Transplant', 'Routine'];

export interface TreatmentTableData {
  sno: number;
  id: string;
  identifier: string;
  patient: string;
}

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.page.html',
  styleUrls: ['./treatments.page.scss'],
})
export class TreatmentsPage implements OnInit {
  displayedColumns: string[] = ['sno', 'identifier', 'id', 'patient'];
  selectedTreatmentID = 1;
  allTreatments: ITreatment[] = [];
  displayTreatments: ITreatment[] = [];
  treatments: TreatmentTableData[];
  search = new FormControl(null);
  allHospitals: IHospital[];
  selectedHospital: IHospital;

  constructor(private route: ActivatedRoute, private authService: AuthService, private treatmentService: TreatmentsService) {}

  getHospitals(): Observable<IHospital[]> {
    const mockHospitals: IHospital[] = [
      {
        id: 1,
        name: 'Dharamshila',
      },
      {
        id: 2,
        name: 'Metro',
      },
    ];
    return of(mockHospitals).pipe(delay(500));
  }

  async getTreatments(hospital: IHospital) {
    this.treatmentService.setSelectedHospital(hospital);
    this.allTreatments = await this.createMockTreatments().toPromise();
    this.treatments = this.allTreatments.reduce((a, c, i) => {
      a.push({
        sno: i + 1,
        identifier: c.identifier,
        id: c.id,
        patient: c.patient,
      });
      return a;
    }, []);
    this.displayTreatments = this.allTreatments;
  }

  createMockTreatments(): Observable<ITreatment[]> {
    const treatments: ITreatment[] = [];
    Array.from({ length: 20 }, (_, k) => {
      const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' + NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
      treatments.push({
        id: '' + Math.floor(Math.random() * (9999999 - 1000000 + 1)),
        identifier: IDENTIFIERS[Math.floor(Math.random() * IDENTIFIERS.length)],
        patient: {
          id: '' + k,
          name,
        },
        dischargeDate: this.randomDate(new Date(2021, 4, 1), new Date()),
        admissionDate: this.randomDate(new Date(2021, 4, 1), new Date()),
        payType: 'cash',
        notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      });
    });
    return of(treatments).pipe(delay(500));
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  }

  filterTreatments(searchStr: string) {
    this.displayTreatments = this.allTreatments.filter(
      (treatment) => treatment.id.includes(searchStr) || treatment.patient.name.includes(searchStr)
    );
  }

  async ngOnInit() {
    this.allHospitals = await this.getHospitals().toPromise();
    this.selectedHospital = this.allHospitals[0];
    this.treatmentService.setSelectedHospital(this.selectedHospital);
    await this.getTreatments(this.selectedHospital);
    this.search.valueChanges.pipe(debounceTime(200)).subscribe((value) => this.filterTreatments(value));
  }

  selectTreatment(row: TreatmentTableData) {
    this.selectedTreatmentID = row.sno;
  }
}
