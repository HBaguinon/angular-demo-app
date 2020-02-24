import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Car } from '../../car';
import { CARS } from '../../cars';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  // carForm: FormGroup;
  @Input()
  cars: Car[];

  @Output()
  deleteCarById = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  doPassToParent(id: number): void {
    this.deleteCarById.emit(id);
  }

}
