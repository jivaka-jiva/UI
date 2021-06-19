import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoColumnLayoutPage } from './two-column-layout.page';

const routes: Routes = [
  {
    path: '',
    component: TwoColumnLayoutPage,
    children: [
      {
        path: 'treatments',
        loadChildren: () => import('../pages/treatments/treatments.module').then((m) => m.TreatmentsPageModule),
      },
      {
        path: 'add-procedure',
        loadChildren: () => import('../pages/add-procedure/add-procedure.module').then((m) => m.AddProcedurePageModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoColumnLayoutPageRoutingModule {}
