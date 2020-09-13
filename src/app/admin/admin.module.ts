import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

// Add a routing module to users module
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
