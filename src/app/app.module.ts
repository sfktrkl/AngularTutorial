import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

// Import the exported module
import { UsersModule } from './users/users.module'

// Import angular forms module
import { FormsModule } from '@angular/forms';

// Import header and footer components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Installation of bootstrap
// https://ng-bootstrap.github.io/#/home
// ng add @ng-bootstrap/bootstrap (It will override the styles!)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Installation of material
// https://material.angular.io/
// ng add @angular/material (It will override the styles!)
// While adding material animations module is also added
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatSliderModule } from '@angular/material/slider';

// Import a child component (pass data)
import { ChildComponent } from './child/child.component';

// Import a child component (reusable component)
import { Child2Component } from './child2/child2.component';

// Import a child component (get data)
import { Child3Component } from './child3/child3.component';

// Import components which will used in the routing
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    ChildComponent,
    Child2Component,
    Child3Component,
    UserComponent,
    AdminComponent
  ],
  // Register the exported module.
  // Now all components inside the module can be accessed.
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
