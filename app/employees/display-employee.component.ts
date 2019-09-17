import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/empolyee.model';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Input() searchTerm: string;
  confirmDelete: false;

  // @Input() employee = Employee
  // @Input()
  // set employee(val:Employee){
  //   console.log('Previous: '+ (this._employee ? this._employee.name : 'NULL'));
  //   console.log('Current: ' + val.name);
  //   this._employee = val;
  // }

  // get employee():Employee{
  //   return this._employee;
  // }
  constructor(private _router: Router, private _employeeService: EmployeeService) {
  }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges){
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  //   const currentEmployee = <Employee>changes.employee.currentValue;

  //   console.log('Previous : '+ (previousEmployee ?previousEmployee.name:'NULL'));
  //   console.log('Current : ' + currentEmployee.name);
  // }


  viewEmployee() {
    this._router.navigate(['./employee', this.employee.id], {
      queryParams: { 'searchTerm': this.searchTerm }
    });
  }

  editEmployee() {
    // console.log("editEmployee")
    this._router.navigate(['./edit', this.employee.id]);
  }

  deleteEmployee() {
    this._employeeService.deleteEmployee(this.employee.id);
  }
}
