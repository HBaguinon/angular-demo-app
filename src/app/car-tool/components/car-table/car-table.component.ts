import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {

  }

}
