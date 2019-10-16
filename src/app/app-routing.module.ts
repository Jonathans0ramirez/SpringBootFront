import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';


const routes: Routes = [
  {path : '', redirectTo: '/employee-list', pathMatch: 'full' },
  {
    path: 'employee-list',
    component: ListEmployeeComponent
  },
  {
    path: 'employee-add',
    component: AddEmployeeComponent
  },
  {
    path: 'employee-edit',
    component: EditEmployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
