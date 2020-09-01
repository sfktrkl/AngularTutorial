import { Component, OnInit } from '@angular/core';

// ng g c login/signup
@Component({
  selector: 'app-signup',                    // Selector is the ID of the component, use this as html tag
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
