import { Injectable } from '@angular/core';
import { ITreatment } from '../interfaces/treatment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IProcedure } from '../interfaces/procedure';
import { IHospital } from '../interfaces/hospital';

@Injectable({
  providedIn: 'root',
})
export class TreatmentsService {
  private selectedTreatment: BehaviorSubject<ITreatment | null> = new BehaviorSubject(null);
  public selectedTreatment$ = this.selectedTreatment.asObservable();

  private selectedHospital: BehaviorSubject<IHospital | null> = new BehaviorSubject(null);
  public selectedHospital$ = this.selectedHospital.asObservable();

  constructor() {}

  setTreatment(treatment: ITreatment) {
    this.selectedTreatment.next(treatment);
  }

  getSelectedTreatment(): Observable<ITreatment> {
    return this.selectedTreatment$;
  }

  setSelectedHospital(hospital: IHospital) {
    this.selectedHospital.next(hospital);
  }

  getSelectedHospital(): Observable<IHospital> {
    return this.selectedHospital$;
  }
}
