import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'treatments',
    pathMatch: 'full',
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('./full-page-layout/full-page-layout.module').then((m) => m.FullPageLayoutModule),
  },
  {
    path: '',
    canLoad: [AuthGuard],
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('./two-column-layout/two-column-layout.module').then((m) => m.TwoColumnLayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
