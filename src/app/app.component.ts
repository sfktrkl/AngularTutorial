import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tutorial!';                   // This is the application title which is {{title}}
  appName = 'appName is Tutorial';       // This is the application name which is {{appName}}

  // These are the properties of the class
  name = 'Sfktrkl';                      // Angular interpolation
  // let obj, you cannot use 'let'
  getName() { return 'Sfktrkl'; }         // Angular function
  getNameA() { return this.name; }        // Angular function
  myObj = { name: 'Safak', age: 20 }      // Angular object
  myArr = ['Sfk', 'trkl'];                // Angular array
  siteUrl = window.location.href          // Access window object
}
