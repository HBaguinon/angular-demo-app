import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Car } from '../../car';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car Tool';

  cars: Car[] = [
    {id: 1, make: 'Toyota', model: 'Celica GT-Four', year: 1997, color: 'black', price: 6000 },
    {id: 2, make: 'Toyota', model: '86', year: 2017, color: 'red', price: 26000 }
  ];

  // newCar: Car;
  // can do this:
  // cars = [
  //   { id: 1, make: 'Toyota', model: 'Celica GT-Four', year: 1997, color: 'black', price: 6000 }
  // ];

  carForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.carForm = this.fb.group({
      make: '',
      model: '',
      year: '',
      color: '',
      price: ''
    });
  }

  addCar(): void {
    const newCar: Car = {
      ...this.carForm.value,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
      // ...this.carForm.value will replace the following:
      //
      // make: this.carForm.value.make,
      // model: this.carForm.value.model,
      // year: this.carForm.value.year,
      // color: this.carForm.value.color,
      // price: this.carForm.value.price
    };

    this.cars = this.cars.concat(newCar);

    this.carForm.reset();
  }

}
