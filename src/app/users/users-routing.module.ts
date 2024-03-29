import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import component
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'user',
    outlet: 'login',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
