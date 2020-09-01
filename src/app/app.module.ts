import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

// Import the exported module
import { UsersModule } from './users/users.module'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  // Register the exported module.
  // Now all components inside the module can be accessed.
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
