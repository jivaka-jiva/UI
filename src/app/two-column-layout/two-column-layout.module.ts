import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwoColumnLayoutPageRoutingModule } from './two-column-layout-routing.module';

import { TwoColumnLayoutPage } from './two-column-layout.page';
import {SidebarComponent} from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwoColumnLayoutPageRoutingModule,
  ],
  declarations: [TwoColumnLayoutPage, SidebarComponent],
})
export class TwoColumnLayoutModule { }
