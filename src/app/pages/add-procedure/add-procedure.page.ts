import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable, of, Subscription } from 'rxjs';
import { TreatmentsService } from '../../shared/services/treatments.service';
import { IHospital } from '../../shared/interfaces/hospital';
import { ProceduresService } from '../../shared/services/procedures.service';
import { IProcedure } from '../../shared/interfaces/procedure';

@Component({
  selector: 'app-add-procedure',
  templateUrl: './add-procedure.page.html',
  styleUrls: ['./add-procedure.page.scss'],
})
export class AddProcedurePage implements OnInit {
  hospitals = [];
  allProcedures: string[] = [];
  addProcedureForm: FormGroup;
  procedureForm: FormGroup;
  hospital$ = new Subscription();
  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    private authService: AuthService,
    private router: Router,
    private storage: Storage,
    private treatmentsService: TreatmentsService,
    private proceduresService: ProceduresService
  ) {}

  ngOnInit() {
    this.initializeForms();
  }

  ionViewWillEnter() {
    this.initializeForms();
    // this.addProcedureForm.get('hospital').valueChanges.subscribe((value) => {
    //   this.addProcedureForm.get('procedures').enable();
    //   this.addProcedureForm.get('procedures').patchValue([]);
    // });
  }

  ionViewWillLeave() {
    this.initializeForms();
    this.hospital$.unsubscribe();
  }

  getProcedures(hospitalID: number): Observable<any> {
    return this.proceduresService.getProcedures(hospitalID);
  }

  initializeForms() {
    // this.storage.get('hospitals').then((data) => (this.hospitals = data));
    this.addProcedureForm = new FormGroup({
      // hospital: new FormControl('', [Validators.required]),
      procedures: new FormControl([], [Validators.required]),
    });
    this.procedureForm = new FormGroup({
      procedures: new FormArray([]),
    });
    this.hospital$ = this.treatmentsService.getSelectedHospital().subscribe(async (hospital) => {
      if (hospital) {
        const procedures = await this.getProcedures(hospital.id).toPromise();
        this.allProcedures = procedures.map((procedure) => procedure.name);
      } else {
        this.router.navigateByUrl('').then();
      }
    });
  }

  async openProcedureDetailsDialog() {
    const modal = await this.modalController.create({
      component: ProcedureDetailsComponent,
      componentProps: {
        procedures: this.addProcedureForm.get('procedures').value,
      },
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data !== 'dismissed') {
      this.addProcedure(data);
    }
  }

  addProcedure(procedureDetails: FormGroup) {
    const procedures: any[] = procedureDetails.value;
    this.proceduresService.addProcedures(procedures);
    const allSelectedProcedures = this.procedureForm.get('procedures') as FormArray;
    procedures.forEach((procedureGroup) => {
      const procedure = new FormGroup({
        procedure: new FormControl(procedureGroup.procedure, [Validators.required]),
        count: new FormControl(procedureGroup.count, [Validators.min(1)]),
        amount: new FormControl(procedureGroup.amount, [Validators.required, Validators.min(0)]),
      });
      allSelectedProcedures.controls.push(procedure);
    });
  }

  submit() {
    if (this.procedureForm.valid) {
      this.authService.showLoader('Saving procedures').then();
      setTimeout(() => {
        this.router.navigateByUrl('procedures').then(() => this.authService.dismissLoader());
      }, 1000);
    }
  }

  async presentToast(mes: string) {
    const toast = await this.toastController.create({
      message: mes,
      duration: 2000,
    });
    await toast.present();
  }

  deleteProcedure(procedure) {
    this.proceduresService.removeProcedure(procedure.value.procedure);
    const procedures = this.procedureForm.get('procedures') as FormArray;
    const index = procedures.controls
      .reduce((a, c) => {
        a.push(c.value.name);
        return a;
      }, [])
      .indexOf(procedure.id);
    procedures.controls.splice(index, 1);
  }
}

@Component({
  selector: 'procedure-details',
  template: `
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Modal Content</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismissModal('dismissed')">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content *ngIf="procedureDetails">
      <form [formGroup]="procedureDetails" style="margin-bottom: 36px">
        <div formArrayName="procedures">
          <section *ngFor="let procedure of procedures; let i = index" [formGroupName]="i">
            <ion-item-group>
              <ion-item-divider>
                <ion-label>{{ procedure }}</ion-label>
              </ion-item-divider>

              <div class="flex-row ml-5 mt-2" style="width: 90%">
                <mat-form-field style="width: 20%; margin-right: 4%">
                  <input matInput formControlName="count" placeholder="Count" required />
                </mat-form-field>
                <mat-form-field>
                  <input matInput formControlName="amount" placeholder="Amount per procedure" required />
                </mat-form-field>
              </div>
            </ion-item-group>
          </section>
        </div>
      </form>
    </ion-content>
    <div class="bottom-fixed-div">
      <ion-button class="w-100" type="submit" (click)="submit()" color="secondary">Submit</ion-button>
    </div>
  `,
})
export class ProcedureDetailsComponent implements OnInit {
  @Input() procedures: string[];
  procedureDetails = new FormGroup({
    procedures: new FormArray([]),
  });
  constructor(public modalController: ModalController, public toastController: ToastController) {}

  ngOnInit() {
    this.initializeForm();
  }

  async presentToast(mes: string) {
    const toast = await this.toastController.create({
      message: mes,
      duration: 2000,
    });
    await toast.present();
  }

  dismissModal(data) {
    this.modalController.dismiss(data).then();
  }

  initializeForm() {
    this.procedures.forEach((procedure) => this.addProcedure(procedure));
  }

  addProcedure(procedure) {
    const procedureDetailArray = this.procedureDetails.get('procedures') as FormArray;
    const procedureDetails = new FormGroup({
      procedure: new FormControl(procedure),
      count: new FormControl(1, [Validators.min(1), Validators.required]),
      amount: new FormControl(100, [Validators.min(0), Validators.required]),
    });
    procedureDetailArray.controls.push(procedureDetails);
  }

  submit() {
    if (this.procedureDetails.valid) {
      const procedureDetails = this.procedureDetails.get('procedures') as FormArray;
      this.dismissModal(procedureDetails);
    } else {
      this.presentToast('Form is invalid').then();
    }
  }
}
