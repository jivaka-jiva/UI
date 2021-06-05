import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent implements OnInit {

  addPatientForm: FormGroup;
  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.addPatientForm = new FormGroup({
      patientName: new FormControl(null, Validators.required),
      patientId: new FormControl(null, Validators.required)
    });
  }

  addPatient() {
    if (this.addPatientForm.valid) {
      // call add patient API and then
      this.router.navigate(['treatments'], {queryParams: {patientId: this.addPatientForm.get('patientId')}}).then();
    }
  }

  closeModal() {
    this.modalController.dismiss().then();
  }
}
