import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components which will used in the routing
import { AdminComponent } from "./admin/admin.component"
import { UserComponent } from "./user/user.component"

// Import component for 404 Page
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'user',
    component: UserComponent,
    outlet: 'notFound'        // Define outlet name, so it will be use to define multiple router-outlets.
  },
  {
    path: '**',               // ** meaning wildcard routing, it will be called when route can not be found.
    component: PageNotFoundComponent,
    outlet: 'notFound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
