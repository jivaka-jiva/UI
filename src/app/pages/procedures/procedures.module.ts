import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProceduresPageRoutingModule } from './procedures-routing.module';

import { ProceduresPage } from './procedures.page';
import { ComponentsModule } from '../../components/components.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProceduresPageRoutingModule, ComponentsModule, MatExpansionModule],
  declarations: [ProceduresPage],
})
export class ProceduresPageModule {}
