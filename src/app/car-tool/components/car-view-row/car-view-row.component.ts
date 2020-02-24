import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../car';
// import { CARS } from '../../cars';

@Component({
  selector: '.car-view-row',
  templateUrl: './car-view-row.component.html',
  styleUrls: ['./car-view-row.component.css']
})
export class CarViewRowComponent implements OnInit {
  @Input()
  car: Car;

  // cars = CARS;

  constructor() { }

  ngOnInit(): void {
  }

}
