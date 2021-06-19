import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TreatmentTableData } from '../../pages/treatments/treatments.page';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ITreatment } from '../../shared/interfaces/treatment';

@Component({
  selector: 'app-mobile-treatments-table',
  templateUrl: './mobile-treatments-table.component.html',
  styleUrls: ['./mobile-treatments-table.component.scss'],
})
export class MobileTreatmentsTableComponent implements OnInit {
  displayedColumns = ['id', 'patient'];
  @Input() allTreatments: ITreatment[];
  expandedElement: ITreatment | null;
  dataSource: MatTableDataSource<TreatmentTableData>;

  constructor() {}

  ngOnInit() {}
}
