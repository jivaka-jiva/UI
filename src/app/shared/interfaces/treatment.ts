import { IPatient } from './IPatient';

export interface ITreatment {
  id: string;
  identifier: string;
  patient: IPatient;
  admissionDate: string;
  dischargeDate: string;
  payType: string;
  notes: string;
}
