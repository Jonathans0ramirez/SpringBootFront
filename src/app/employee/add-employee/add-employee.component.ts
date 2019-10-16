import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { ApiEmployeeService } from '../../services/api-employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit, OnDestroy {

  employee: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router,
    private employeeService: ApiEmployeeService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.employeeService.get(id).subscribe((employee: any) => {
          if (employee) {
            this.employee = employee;
          } else {
            this._snackBar.open(`Empleado con el id: '${id}' no encontrado, volviendo a la lista.`, 'OK', {
              duration: 5000,
            });
            this.gotoEmployeeList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save(form: NgForm) {
    this.employeeService.save(form).subscribe(result => {
      this._snackBar.open('Success: Empleado Guardado', 'OK', {
        duration: 5000,
      });
      this.gotoEmployeeList();
    }, error => console.error(error)
    );
  }

  gotoEmployeeList() {
    this.router.navigate(['/employee-list']);
  }

}
