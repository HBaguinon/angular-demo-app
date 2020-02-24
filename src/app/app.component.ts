import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "demo-app";

  //
  // In JavaScript, it looks like this:
  //
  // title: string;
  //
  // constructor() {
  //   this.title = 'demo-app';
  // }
}
// Mastering JavaScript is KEY
// A good resource is "You Don't Know JS"
// https://github.com/getify/You-Dont-Know-JS
// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md
// at its heart, JS is a functional programming language
// not imperative
// everything is done declaritively
// simple for loops are super fast bc for each calls the function each time
