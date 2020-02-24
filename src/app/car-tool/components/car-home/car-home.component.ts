import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car Tool';

  // can do this:
  // cars = [
  //   { id: 1, make: 'Toyota', model: 'Celica GT-Four', year: 1997, color: 'black', price: 6000 }
  // ];

  constructor() { }

  ngOnInit(): void {

  }

}
