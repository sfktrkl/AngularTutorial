import { Component, Injector } from '@angular/core';

// Import users service to access its data
import { UsersService } from './users.service'

// Import the data type from service
import { user } from './users.service'

// Import classes for lazy loading component
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

// Import form group and form control for reactive forms
import { FormGroup } from '@angular/forms'
import { FormControl } from '@angular/forms'

// Import validators for validation of reactive forms
import { Validators } from '@angular/forms'

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
  {
    type: 'success',
    message: 'Success',
  }
];

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

  // Create arrays to use in loops
  numbers = [1, 2, 3, 4];
  objects = [
    { name: 'a', age: 1 },
    { name: 'b', age: 2 },
    { name: 'c', age: 3 },
    { name: 'd', age: 4 }
  ];

  // Create a method to get values from the form
  getFormValues(value) { console.warn(value); }

  // Define a color to use in style binding
  colorToBind = 'yellow';
  updateColor() { this.colorToBind = 'blue'; }
  // Create a property to use as condition while style binding
  condition = true;
  updateCondition() { this.condition = !this.condition; }

  // Create methods to use with bootstrap
  alerts = Array.from(ALERTS);
  close(alert: Alert) { this.alerts.splice(this.alerts.indexOf(alert), 1); }
  reset() { this.alerts = Array.from(ALERTS); }

  // Create properties to pass to child component
  dataToPass = 'Data passed to child component';
  objectToPass =
    {
      name: 'A Name',
      age: 1
    };

  // Create a property to pass to child2 component
  arrayToPass = [
    {
      name: 'a',
      age: 'b'
    },
    {
      name: 'c',
      age: 'd'
    }
  ];

  // Create a method to get data from child
  getData(data) { this.takenData = data; }
  takenData = { name: null, age: null }

  // Create properties to use with pipes
  s = 'NamE';
  d = Date.now();
  m = 5821;

  // Inject an injector inside the constructor
  // to be able to inject other modules without constructor injection
  constructor(private injector: Injector) { }

  // Inject the users service
  usersService = this.injector.get(UsersService);

  // Create a method to get data from service
  takeDataFromService() { this.nameFromService = this.usersService.getData().name; }
  nameFromService = "";

  // Create a method to get data from api
  takeDataFromAPI() { this.usersService.getDataFromAPI().subscribe(data => { this.dataFromAPI = data; }); }
  dataFromAPI;

  // Create a method to return a data with by using an interface
  getUserData() {
    const data:user = {
      name: "a name",
      id: 10,
      address: "some place",
      isRegistered: true,
    }
    return data;
  }

  // Make intances of classes which will be used in lazy loading component
  // ViewContainerRef will create a container like div, paragraph.
  vcr = this.injector.get(ViewContainerRef);
  // ComponentFactoryResolver will execute the code and generate the component
  cfr = this.injector.get(ComponentFactoryResolver);

  // Define methods which will be used to load components
  // This will generate a promise, so use async/await
  async loadLogin() {
    this.vcr.clear();
    const { LoginComponent } = await import('./lazy-loading/login/login.component');
    this.vcr.createComponent(this.cfr.resolveComponentFactory(LoginComponent));
  }
  async loadSignup() {
    this.vcr.clear();
    const { SignupComponent } = await import('./lazy-loading/signup/signup.component');
    this.vcr.createComponent(this.cfr.resolveComponentFactory(SignupComponent));
  }

  // Create method to get data from bootstrap form for validation
  onSubmit(data) { console.warn(data); }

  // Define data to pre fill form
  preFillData = {
    email: "test@test.com",
    adress: "some place",
    mobile: "12803712",
  }

  // Define a reactive form
  reactiveForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  // Define a reactive form for validation
  validatedReactiveForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  })

  // Define a method to get email from reactive form to validate
  get reactiveFormEmail() { return this.validatedReactiveForm.get('email'); }

  // Define a reactive form for full validation
  fullValidatedReactiveForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    address: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
  })

  // Define a method to get fields from reactive form and to validate
  validateField(fieldName) {
    var field = this.fullValidatedReactiveForm.get(fieldName);
    return field.invalid && field.touched;
  }
}
