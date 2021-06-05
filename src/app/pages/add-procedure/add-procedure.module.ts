import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProcedurePageRoutingModule } from './add-procedure-routing.module';

import {AddProcedurePage, ProcedureDetailsComponent} from './add-procedure.page';
import {ComponentsModule} from '../../components/components.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddProcedurePageRoutingModule,
    ComponentsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule
  ],
  declarations: [AddProcedurePage, ProcedureDetailsComponent],
  entryComponents: [ProcedureDetailsComponent]
})
export class AddProcedurePageModule {}
