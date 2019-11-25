import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DisplayEmpComponent } from './display-emp/display-emp.component';

const routes: Routes = [
  {path:'adduser', component: AddUserComponent  },
  {path:'view', component: DisplayEmpComponent },
  {path:'', redirectTo:'/adduser',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
