import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = 'Color Tool'; // referenced in template HTML

  colors = ['purple', 'lilac', 'fuschia', 'red'];

  colorForm: FormGroup;

  // traditionally you would do
  // private fb: Formbuilder;
  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }
  // Note: the only time you need to do this is if you need to type more

  constructor(private fb: FormBuilder) { } // check traditionally above^

  ngOnInit(): void {

    this.colorForm = this.fb.group({
      color: '',
    });
  }

  addColor() {

    this.colors = this.colors.concat(this.colorForm.value.color);

    this.colorForm.reset();

    // an old way to do this is:
    // this.colors.push(this.colorForm.value.color);
    // you don't want to do this because it will mutate the array object
    // instead, use cat
    // this Angular application is different from a traditional webapp which hits a server
    // this one is more like a desktop application which loads locally in memory
    // Single most important concept in UI Design (BEST PRACTICE):
    // Model --> UI (DOM)
    // All changes to UI are a result of a Model change
    // JQuery violates this pattern. It should change the Model first, before DOM change
    // If Model is mutated, how do you know it changed without inspecting the whole thing?
    // This is inefficient which is why it should not be mutated.
    // Should produce new Car Array with a new car added to the end. "Change Detection on Push"
  }

}
