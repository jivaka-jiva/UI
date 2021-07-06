import { Injectable } from '@angular/core';
import { ITreatment } from '../interfaces/treatment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IProcedure } from '../interfaces/procedure';

@Injectable({
  providedIn: 'root',
})
export class TreatmentsService {
  private selectedTreatment: BehaviorSubject<ITreatment | null> = new BehaviorSubject(null);
  public selectedTreatment$ = this.selectedTreatment.asObservable();

  procedures: IProcedure[] = [
    {
      id: 1,
      name: 'Anaesthesia',
      cost: 120,
    },
    {
      id: 2,
      name: 'Transplant',
      cost: 140,
    },
    {
      id: 3,
      name: 'Arthroscopy',
      cost: 1000,
    },
    {
      id: 4,
      name: 'Oxygen',
      cost: 190,
    },
    {
      id: 5,
      name: 'Dressing',
      cost: 50,
    },
  ];

  constructor() {}

  setTreatment(treatment: ITreatment) {
    this.selectedTreatment.next(treatment);
  }

  getSelectedTreatment(): Observable<ITreatment> {
    return this.selectedTreatment$;
  }

  getProcedures(id: string): Observable<IProcedure[]> {
    return of(this.procedures);
  }
}
