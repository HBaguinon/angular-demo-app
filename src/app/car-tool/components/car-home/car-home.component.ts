import { Component, OnInit } from '@angular/core';
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
  // can do this:
  // cars = [
  //   { id: 1, make: 'Toyota', model: 'Celica GT-Four', year: 1997, color: 'black', price: 6000 }
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
