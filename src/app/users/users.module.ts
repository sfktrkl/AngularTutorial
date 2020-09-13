import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// Module is a full feature which contains components, directives, services and pipes.
// For example, an application for a users, user is a complete module and user-login
// use-signup and user-profil. Basically module is a collection of components.

// Add a routing module to users module for group routing
import { UsersRoutingModule } from './users-routing.module';

// ng g m users
@NgModule({
  // Declare the components
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule
  ],
  // Export the components
  exports: [
    LoginComponent,
    SignupComponent,
    UsersRoutingModule
  ]
})
export class UsersModule { }
