import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components which will used in the routing
import { AdminComponent } from "./admin/admin.component"
import { UserComponent } from "./user/user.component"

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
