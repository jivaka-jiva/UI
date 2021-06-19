import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent implements OnInit {
  addPatientForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddPatientComponent>, @Inject(MAT_DIALOG_DATA) public data, private router: Router) {}

  ngOnInit() {
    this.addPatientForm = new FormGroup({
      patientName: new FormControl(null, Validators.required),
      patientId: new FormControl(this.data.patientId, Validators.required),
    });
  }

  async addPatient() {
    if (this.addPatientForm.valid) {
      // call add patient API and then
      await this.closeModal();
      this.router.navigate(['treatments'], { queryParams: { patientId: this.addPatientForm.value.patientId } }).then();
    }
  }

  async closeModal() {
    await this.dialogRef.close();
  }
}
