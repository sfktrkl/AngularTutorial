import { Injectable, Injector } from '@angular/core';

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
}
