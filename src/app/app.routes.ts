import {UsersComponent} from "./users/users.component";
import {HomeComponent } from "./home/home.component";
import { Routes, RouterModule} from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
	{ path:'users', component: UsersComponent},
	{ path:'',  component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }