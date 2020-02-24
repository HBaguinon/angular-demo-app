import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Car } from '../../car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  carForm: FormGroup;

  @Input()
  buttonText = 'Submit Car';

  @Output()
  submitCar = new EventEmitter<Car>();

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

  doSubmitCar() {

    // Step 1
    this.submitCar.emit(this.carForm.value);

    this.carForm.reset();
  }

}
