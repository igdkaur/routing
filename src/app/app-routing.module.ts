import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent},]},
  {
    path: 'servers', 
    // canActivate: [AuthGuard], 
    canActivateChild:[AuthGuard],
    component:ServersComponent,
    children: [
    {path: ':id/edit', component:EditServerComponent, canDeactivate: [CanDeactivateGuard]},
    {path: ':id', component:ServerComponent},]},
  {path: 'not-found',component:PageNotFoundComponent},
  {path: 'something',redirectTo:'/not-found'},
  {path: '**',redirectTo:'/not-found'},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:  [RouterModule]
})
export class AppRoutingModule {

}

//add appRoutes constant here

//add back to main module
  // And this will make sure that servers is now only accessible
  // and all the child routes only accessible
  // if the AuthGuard CanActivate method returns true in the end
  // which will only happen if in the AuthService
  // loggedIn is set to true.


 //because the off-guard now is able to do both.
// Protect a single route,
// since we have can activate implemented,
// or all child routes,
// since we have can activate child implemented too. 