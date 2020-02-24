import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../car';

@Component({
  selector: '.car-view-row',
  templateUrl: './car-view-row.component.html',
  styleUrls: ['./car-view-row.component.css']
})
export class CarViewRowComponent implements OnInit {
  @Input()
  car: Car;

  @Output()
  deleteCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  doRemoveCar(): void {
    this.deleteCar.emit(this.car.id);
  }

}
