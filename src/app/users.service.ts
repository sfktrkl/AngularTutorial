import { Injectable, Injector } from '@angular/core';

// Import http client to be able to get data from database
import { HttpClient } from '@angular/common/http';

// Create an interface to be able to use inside the components
// It provides data structure validation.
export interface user {
  name: string,
  id: number,
  address: any
  isRegistered: boolean,
}

@Injectable({
  providedIn: 'root'
})

// ng g service users
export class UsersService {

  // Inject an injector inside the constructor
  // to be able to inject other modules without constructor injection
  constructor(private injector: Injector) { }

  // Create a method to get data from this service
  getData() { return { name: 'Name from Service' }; }

  // Create a method to get data from API
  getDataFromAPI() {
    let url = "https://jsonplaceholder.typicode.com/todos/";
    let http = this.injector.get(HttpClient);
    return http.get(url);
  }
}
