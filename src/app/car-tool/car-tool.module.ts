import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarTableComponent } from './components/car-table/car-table.component';

import { Car } from './car';
import { CarViewRowComponent } from './components/car-view-row/car-view-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';

@NgModule({
  declarations: [CarHomeComponent, CarTableComponent, CarViewRowComponent, CarFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [ CarHomeComponent ]
})
export class CarToolModule { }
