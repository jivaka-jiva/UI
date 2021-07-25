import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreatmentsService } from '../../shared/services/treatments.service';
import { ITreatment } from '../../shared/interfaces/treatment';
import { Observable, Subscription } from 'rxjs';
import { IProcedure } from '../../shared/interfaces/procedure';
import { ProceduresService } from '../../shared/services/procedures.service';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.page.html',
  styleUrls: ['./procedures.page.scss'],
})
export class ProceduresPage implements OnInit, OnDestroy {
  selectedTreatment$: Observable<ITreatment>;
  selectedTreatment = new Subscription();
  procedures$: Observable<IProcedure[]>;
  treatmentID: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private treatmentsService: TreatmentsService,
    private proceduresService: ProceduresService
  ) {}

  ngOnInit() {
    this.selectedTreatment$ = this.treatmentsService.getSelectedTreatment();
    this.selectedTreatment = this.selectedTreatment$.subscribe((treatment) => {
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

  ionViewWillEnter() {
    this.ngOnInit();
  }

  openAddProcedureModal() {}

  ngOnDestroy() {
    this.selectedTreatment.unsubscribe();
  }

  getProcedures() {
    this.procedures$ = this.proceduresService.getProcedures({ treatmentId: this.treatmentID });
  }

  goToProcedures() {
    this.router.navigateByUrl('add-procedure').then();
  }
}
