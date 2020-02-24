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

    // this.carForm = this.fb.group({
    //   make: '',
    //   model: '',
    //   year: '',
    //   color: '',
    //   price: ''
    // });
  }
  // addCar(): void {
  //   const newCar: Car = {
  //     ...this.carForm.value,
  //     id: Math.max(...this.cars.map(c => c.id), 0) + 1,

  //     // My version for ID:
  //     // id: this.cars[this.cars.length - 1].id + 1
  //     // ...this.carForm.value will replace the following:
  //     //
  //     // make: this.carForm.value.make,
  //     // model: this.carForm.value.model,
  //     // year: this.carForm.value.year,
  //     // color: this.carForm.value.color,
  //     // price: this.carForm.value.price
  //   };

  //   this.cars = this.cars.concat(newCar);

  //   this.carForm.reset();
  // }

}
