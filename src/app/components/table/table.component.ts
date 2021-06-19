import { AfterViewInit, Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TreatmentTableData } from '../../pages/treatments/treatments.page';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() treatments: TreatmentTableData[];
  @Input() displayedColumns: string[];
  @Output() selectTreatment = new EventEmitter<TreatmentTableData>();
  dataSource: MatTableDataSource<TreatmentTableData>;
  selectedTreatmentID = 1;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.treatments);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSelectTreatment(row) {
    this.selectedTreatmentID = parseInt(row.sno, 10);
    this.selectTreatment.emit(row);
  }
}
