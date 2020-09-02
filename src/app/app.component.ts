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

  // Create a function to call with a button
  getTheName() { alert('The Name'); }
  // Create a function with a parameter
  getAName(name) { alert(name); }
  // Create a propery which will be used in the getAName() function
  myName = 'My Name';

  // Create a function to call with events
  myEvent(input) { console.warn(event.type + ": " + input); }

  // Create a function to get value of the input box
  getValue(value) { console.warn(value); }
  // Create a function to set value of the property
  setValue(value) { this.currentValue = value; }
  currentValue = 'Set the value of this paragraph by using the button';

  // Create to property to bind an html element
  bindName = 'Bounded name';
  // Create a property which will be used in the disable attribute of the input boxes
  enabled = true;
  enableBox() { this.enabled = !this.enabled; }

  // Create a property to use in conditional statements
  show = true;

  // Create a property to use in switch-case
  color = 'pink';
}
