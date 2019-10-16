import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';


const routes: Routes = [
  {path : '', redirectTo: '/employee-list', pathMatch: 'full' },
  {
    path: 'employee-list',
    component: ListEmployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
