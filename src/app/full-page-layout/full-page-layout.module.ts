import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullPageLayoutPageRoutingModule } from './full-page-layout-routing.module';

import { FullPageLayoutPage } from './full-page-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullPageLayoutPageRoutingModule
  ],
  exports: [],
  declarations: [FullPageLayoutPage]
})
export class FullPageLayoutModule { }
