import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tutorial!';                   // This is the application title which is {{title}}
  appName = 'appName is Tutorial';       // This is the application name which is {{appName}}
}
