import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });
  constructor(
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  public async presentToast(mes: string) {
    const toast = await this.toastController.create({
      message: mes,
      duration: 3000
    });
    await toast.present();
  }

  async login() {
    if (this.loginForm.valid) {
      const isRegistered = await this.storage.get('isRegistered');
      if (isRegistered === 'yes') {
        this.authService.login(this.loginForm.value)
          .then(result => {
            if (result) {
              this.router.navigateByUrl('dashboard').then();
            } else {
              this.presentToast('Invalid email id or password').then();
            }
          }) ;
      } else {
        this.presentToast('User does not exist, please sign up.').then();
      }
    }
  }

}
