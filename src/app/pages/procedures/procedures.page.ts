import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreatmentsService } from '../../shared/services/treatments.service';
import { ITreatment } from '../../shared/interfaces/treatment';
import { Observable } from 'rxjs';
import { IProcedure } from '../../shared/interfaces/procedure';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.page.html',
  styleUrls: ['./procedures.page.scss'],
})
export class ProceduresPage implements OnInit {
  selectedTreatment$: Observable<ITreatment>;
  procedures$: Observable<IProcedure[]>;
  treatmentID: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private treatmentsService: TreatmentsService) {}

  ngOnInit() {
    this.selectedTreatment$ = this.treatmentsService.getSelectedTreatment();
    this.selectedTreatment$.subscribe((treatment) => {
      if (!treatment) {
        this.router.navigateByUrl('treatments').then();
      } else {
        this.treatmentID = treatment.id;
        this.getProcedures();
      }
    });
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.dialog) {
        this.openAddProcedureModal();
      }
    });
  }

  openAddProcedureModal() {}

  getProcedures() {
    this.procedures$ = this.treatmentsService.getProcedures(this.treatmentID);
  }
}
