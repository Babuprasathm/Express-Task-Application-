import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './Service/auth.service';
import { TeammembersComponent } from './teammembers/teammembers.component';
import { ChartComponent } from './chart/chart.component';


const routes: Routes = [

  { path: '', component: TeammembersComponent }, 

  {path:'login',component:LoginComponent,canActivate:[AuthService]},
  { path: 'list', component: NavbarComponent },   
  { path: 'add', component: AddTodoComponent },
  { path: 'chart', component: ChartComponent },
  // { path: '**', redirectTo: '' }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
