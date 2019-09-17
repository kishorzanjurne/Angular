import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/empolyee.model';
// import { Observable } from '../'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee:Employee;
  constructor(private _routes: ActivatedRoute,
    private _employeeService: EmployeeService) { }

  ngOnInit() {
    const id = +this._routes.snapshot.params['id'];
    this.employee=this._employeeService.getEmployee(id);

  }

}