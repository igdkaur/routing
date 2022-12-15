import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
{path: '', component: HomeComponent},
{path: 'users', component: UsersComponent, children: [
  {path: ':id/:name', component: UserComponent},]},
{path: 'servers', component:ServersComponent,children: [
  {path: ':id/edit', component:EditServerComponent},
  {path: ':id', component:ServerComponent},]},
{path: 'not-found',component:PageNotFoundComponent},
{path: 'something',redirectTo:'/not-found'},
{path: '**',redirectTo:'/not-found'},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }



// add route here
// appRoutes hold all route of this app

//  forRoot-registers routes for main application

// colon name- colon = dynamaic part of path 
//encode data in path/ route with dynamic path
//acs encoded URL


//all routes start with servers - add child routes
//wildcard route catching all routes which are unknown,IMP order matters