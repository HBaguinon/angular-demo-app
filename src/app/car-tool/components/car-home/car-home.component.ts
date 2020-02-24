import { Component, OnInit } from '@angular/core';

import { Car } from '../../car';
import { CARS } from '../../cars';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car Tool';

  cars = CARS;

  // can do this:
  // cars = [
  //   { id: 1, make: 'Toyota', model: 'Celica GT-Four', year: 1997, color: 'black', price: 6000 }
  // ];

  constructor() { }

  ngOnInit(): void {
  }

  doAddCar(car: Car): void {
    const newCar: Car = {
      ...car,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,

      // My version for ID:
      // id: this.cars[this.cars.length - 1].id + 1
      // ...this.carForm.value will replace the following:
      //
      // make: this.carForm.value.make,
      // model: this.carForm.value.model,
      // year: this.carForm.value.year,
      // color: this.carForm.value.color,
      // price: this.carForm.value.price
    };

    // This is HORRIBLE code because car is an input:
    // this.cars.push(car);

    this.cars = this.cars.concat(newCar);
  }

  doRemoveCar(id: number): void {
    this.cars = this.cars.filter(car => car.id !== id);
  }

}
