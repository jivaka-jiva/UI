import { Injectable } from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storage: Storage,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  async showLoader(message?: string) {
    await this.dismissLoader();
    const loader = await this.loadingController.create({
      message: message || 'Please wait...',
    });
    return await loader.present();
  }

  async dismissLoader() {
    while (await this.loadingController.getTop() !== undefined) {
      await this.loadingController.dismiss();
    }
  }

  async login(authData: {username: string, password: string}): Promise<boolean> {
    const email = await this.storage.get('email');
    const password = await this.storage.get('password');
    if (authData.username === email && authData.password === password) {
      this.showLoader('Logging in').then();
      //  TODO: Login API
      const delay = new Promise((resolve) => {
        setTimeout(resolve, 700);
      });
      await delay;
      await this.storage.set('token', true);
      await this.dismissLoader();
      return true;
    } else {
      return false;
    }
  }

  async register(registerData: any): Promise<boolean> {
    //  TODO: Register API
    return this.showLoader('Welcome ' + registerData.name).then(async () => {
      const delay = new Promise((resolve) => {
        setTimeout(resolve, 700);
      });
      await delay;
      await this.dismissLoader();
      return true;
    });
  }

  clearStorage() {
    this.storage.clear().then();
  }

  logout() {
  //  TODO: Logout API
    this.showLoader('Logging out').then();
    setTimeout(() => {
      this.clearStorage();
      this.router.navigateByUrl('login').then(() => this.dismissLoader());
    }, 1000);
  }

  checkLogin(): Promise<boolean> {
    return this.storage.get('token')
      .then(val => {
        return val ? true : false;
      })
      .catch(err => false);
  }
}
