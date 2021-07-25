import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { IProcedure } from '../interfaces/procedure';

@Injectable({
  providedIn: 'root',
})
export class ProceduresService {
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

  getProcedures(filters: {}) {
    return of(this.procedures);
  }

  addProcedures(data: any[]) {
    const formattedProcedures = data.reduce((a, c, k) => {
      a.push({
        id: k + 6,
        cost: c.amount,
        name: c.procedure,
      });
      return a;
    }, []);
    this.procedures = [...this.procedures, ...formattedProcedures];
  }

  removeProcedure(name: string) {
    this.procedures = this.procedures.filter((p) => p.name !== name);
    console.log(this.procedures);
  }
}
