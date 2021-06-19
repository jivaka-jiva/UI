import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-procedure',
  templateUrl: './add-procedure.page.html',
  styleUrls: ['./add-procedure.page.scss'],
})
export class AddProcedurePage implements OnInit {
  hospitals = [];
  allProcedures = ['Inject', 'Sedate', 'Root canal', 'Eye test'];
  addProcedureForm: FormGroup;
  procedureForm: FormGroup;
  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    private authService: AuthService,
    private router: Router,
    private storage: Storage
  ) {
    this.storage.get('hospitals').then((data) => (this.hospitals = data));
  }

  ngOnInit() {
    this.initializeForms();
  }

  ionViewWillEnter() {
    this.initializeForms();
    this.addProcedureForm.get('hospital').valueChanges.subscribe((value) => {
      this.addProcedureForm.get('procedures').enable();
      this.addProcedureForm.get('procedures').patchValue([]);
    });
  }

  ionViewWillLeave() {
    this.initializeForms();
  }

  initializeForms() {
    this.addProcedureForm = new FormGroup({
      hospital: new FormControl('', [Validators.required]),
      procedures: new FormControl({ value: [], disabled: true }, [Validators.required]),
    });
    this.procedureForm = new FormGroup({
      procedures: new FormArray([]),
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

  addProcedure(procedureDetails: FormGroup[]) {
    const allSelectedProcedures = this.procedureForm.get('procedures') as FormArray;
    procedureDetails.forEach((procedureGroup) => {
      const procedure = new FormGroup({
        hospital: new FormControl(this.addProcedureForm.get('hospital').value, [Validators.required]),
        procedure: new FormControl(procedureGroup.value.procedure, [Validators.required]),
        count: new FormControl(procedureGroup.value.count, [Validators.min(1)]),
        amount: new FormControl(procedureGroup.value.amount, [Validators.required, Validators.min(0)]),
        patient: new FormControl(procedureGroup.value.patient),
      });
      allSelectedProcedures.controls.push(procedure);
    });
  }

  submit() {
    if (this.procedureForm.valid) {
      this.saveData();
      this.authService.showLoader('Saving procedures').then();
      setTimeout(() => {
        this.router.navigateByUrl('').then(() => this.authService.dismissLoader());
      }, 1000);
    }
  }

  async saveData() {
    // TODO: for demo purpose
    let totalFees = parseInt(await this.storage.get('total_fees_this_month'), 10) || 0;
    let totalProcedures = parseInt(await this.storage.get('total_procedures'), 10) || 0;
    const hospitals = await this.storage.get('hospitals');
    const hospitalData = {};
    await hospitals.forEach(async (hospital) => {
      hospitalData[hospital] = (await this.storage.get(hospital)) || 0;
    });

    const procedureList = (this.procedureForm.get('procedures') as FormArray).controls;
    procedureList.forEach((procedure) => {
      totalFees += parseInt(procedure.value.amount, 10) * parseInt(procedure.value.count, 10);
      totalProcedures += parseInt(procedure.value.count, 10);
      hospitalData[procedure.value.hospital] =
        parseInt(hospitalData[procedure.value.hospital], 10) + parseInt(procedure.value.amount, 10) * parseInt(procedure.value.count, 10);
    });
    await this.storage.set('total_fees_this_month', totalFees + '');
    await this.storage.set('total_procedures', totalProcedures + '');
    await hospitals.forEach(async (hospital) => {
      await this.storage.set(hospital, hospitalData[hospital]);
    });
  }

  async presentToast(mes: string) {
    const toast = await this.toastController.create({
      message: mes,
      duration: 2000,
    });
    await toast.present();
  }

  deleteProcedure(index) {
    const procedures = this.procedureForm.get('procedures') as FormArray;
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

              <div class="flex-row ml-5 mt-2" style="width: 72%">
                <mat-form-field style="width: 20%; margin-right: 8%">
                  <input matInput formControlName="count" placeholder="Count" required />
                </mat-form-field>
                <mat-form-field>
                  <input matInput formControlName="amount" placeholder="Amount per procedure" required />
                </mat-form-field>
                <mat-form-field style="width: 100%">
                  <input matInput formControlName="patient" placeholder="Patient's name" required />
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
      patient: new FormControl(''),
    });
    procedureDetailArray.controls.push(procedureDetails);
  }

  submit() {
    if (this.procedureDetails.valid) {
      const procedureDetails = this.procedureDetails.get('procedures') as FormArray;
      this.dismissModal(procedureDetails.controls);
    } else {
      this.presentToast('Form is invalid').then();
    }
  }
}
