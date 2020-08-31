import { Component, OnInit } from '@angular/core';

// Decorator
// ng g c user-list
@Component({
  selector: 'app-user-list',                    // Selector defines the component name
  templateUrl: './user-list.component.html',    // Template html
  styleUrls: ['./user-list.component.css']      // Url styles
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
