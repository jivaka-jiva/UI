import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProcedurePage } from './add-procedure.page';

const routes: Routes = [
  {
    path: '',
    component: AddProcedurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProcedurePageRoutingModule {}
