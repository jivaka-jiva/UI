import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullPageLayoutPage } from './full-page-layout.page';
import {LoginGuard} from '../shared/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: FullPageLayoutPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        canLoad: [LoginGuard],
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../pages/register/register.module').then(m => m.RegisterPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPageLayoutPageRoutingModule { }
