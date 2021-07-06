import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TreatmentTableData } from '../../pages/treatments/treatments.page';
import { MatTableDataSource } from '@angular/material/table';
import { ITreatment } from '../../shared/interfaces/treatment';
import { Router } from '@angular/router';
import { TreatmentsService } from '../../shared/services/treatments.service';

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

  constructor(private router: Router, private treatmentsService: TreatmentsService) {}

  ngOnInit() {}

  goToProcedures(treatment: ITreatment) {
    this.treatmentsService.setTreatment(treatment);
    this.router.navigateByUrl('procedures').then();
  }
}
