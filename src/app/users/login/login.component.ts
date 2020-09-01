import { Component, OnInit } from '@angular/core';

// ng g c users/login
@Component({
  selector: 'app-login',                    // Selector is the ID of the component, use this as html tag
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
