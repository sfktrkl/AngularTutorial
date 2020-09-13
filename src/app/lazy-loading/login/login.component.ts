import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
    // To test whether this component is load or not during the first load of the page
    console.warn('Lazy Loading - Login component is loaded.');
  }

  ngOnInit(): void {
  }

}
