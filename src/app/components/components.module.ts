import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { TableComponent } from './table/table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TreatmentDetailsComponent } from './treatment-details/treatment-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MobileTreatmentsTableComponent } from './mobile-treatments-table/mobile-treatments-table.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, TableComponent, TreatmentDetailsComponent, MobileTreatmentsTableComponent],
  imports: [
    CommonModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatRippleModule,
    RouterModule,
  ],
  exports: [HeaderComponent, TableComponent, TreatmentDetailsComponent, MobileTreatmentsTableComponent],
})
export class ComponentsModule {}
