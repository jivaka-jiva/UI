import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('./full-page-layout/full-page-layout.module').then(m => m.FullPageLayoutModule)
  },
  {
    path: '',
    canLoad: [AuthGuard],
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('./two-column-layout/two-column-layout.module').then(m => m.TwoColumnLayoutModule)
  },
  {
    path: 'add-procedure',
    loadChildren: () => import('./pages/add-procedure/add-procedure.module').then( m => m.AddProcedurePageModule)
  },
  {
    path: 'treatments',
    loadChildren: () => import('./pages/treatments/treatments.module').then( m => m.TreatmentsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
