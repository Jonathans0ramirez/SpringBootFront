import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiEmployeeService } from '../../services/api-employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Array<any>;
  employee: any = {};

  displayedColumns: string[] = ['fullName', 'Name', 'ManagerEmail', 'Salario', 'Cargo', 'Direccion', 'Oficina', 'Dependencia', 'Actions'];


  constructor(private router: Router, private employeeService: ApiEmployeeService,) { }

  ngOnInit() {
    this.employeeService.getAll().subscribe(data => {
      this.employees = data;
      for (const employee of this.employees) {
        if(!employee.ownerDni){
          employee.fullName = "----------";
        } else{
        }
      }
    });
  }

  deleteEmployee(id) {
    this.employeeService.remove(id).subscribe(result => {
       this.ngOnInit();
     }, error => console.error(error));
   };

  editEmployee(id) {
    window.localStorage.removeItem("editEmployeeId");
    window.localStorage.setItem("editEmployeeId", id);
    this.router.navigate(['edit-employee']);
  };

}
