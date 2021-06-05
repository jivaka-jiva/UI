import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: Storage
  ) { }
  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.min(5)
    ]),
    hospitals: new FormControl([], [
      Validators.required
    ]),
    speciality: new FormControl('', [
      Validators.required
    ])
  });
  hospitals = ['Max', 'Dharamshila', 'Kailash', 'Metro'];
  specialities = ['ENT', 'Dentist', 'Anaesthesia', 'Physician'];

  ngOnInit() {
  }

  async register() {
    await this.storage.set('isRegistered', 'yes');
    await this.storage.set('hospitals', this.registerForm.get('hospitals').value);
    await this.storage.set('speciality', this.registerForm.get('speciality').value);
    await this.storage.set('email', this.registerForm.get('email').value);
    await this.storage.set('password', this.registerForm.get('password').value);
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value)
        .then(isRegistered => {
          if (isRegistered) {
            const loginData = {
              username: this.registerForm.value.email,
              password: this.registerForm.value.password
            };
            this.authService.login(loginData)
              .then(result => {
                if (result) {
                  this.router.navigateByUrl('dashboard').then();
                }
              });
          }
        });
    }
  }
}
