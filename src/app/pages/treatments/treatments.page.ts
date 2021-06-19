import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ITreatment } from '../../shared/interfaces/treatment';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

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

  constructor(private route: ActivatedRoute) {
    this.treatments = Array.from({ length: 100 }, (_, k) => this.createMockTreatments(k + 1));
    this.displayTreatments = this.allTreatments;
  }

  createMockTreatments(id: number): TreatmentTableData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' + NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    const rowData = {
      sno: id,
      identifier: IDENTIFIERS[Math.floor(Math.random() * IDENTIFIERS.length)],
      id: '' + Math.floor(Math.random() * (9999999 - 1000000 + 1)),
      patient: name,
    };
    this.allTreatments.push({
      id: rowData.id,
      identifier: rowData.identifier,
      patient: {
        id: '' + id,
        name: rowData.patient,
      },
      dischargeDate: this.randomDate(new Date(2021, 4, 1), new Date()),
      admissionDate: this.randomDate(new Date(2021, 4, 1), new Date()),
      payType: 'cash',
      notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    });
    return rowData;
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  }

  filterTreatments(searchStr: string) {
    this.displayTreatments = this.allTreatments.filter(
      (treatment) => treatment.id.includes(searchStr) || treatment.patient.name.includes(searchStr)
    );
  }

  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(200)).subscribe((value) => this.filterTreatments(value));
  }

  selectTreatment(row: TreatmentTableData) {
    this.selectedTreatmentID = row.sno;
  }
}
