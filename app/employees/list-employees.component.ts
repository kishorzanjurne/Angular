import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/empolyee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];

  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filtereEmployees(value);
  }
  filtereEmployees(searchString: string) {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  employeeToDisplay: Employee;
  private arrayIndex = 1;
  constructor(private _employeeService: EmployeeService,
    private _router: Router) {
  }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe((empList) => {
      this.employees = empList;
      this.filteredEmployees = this.employees;
    });

  }

  // nextEmployee(): void {
  //   if (this.arrayIndex <= 2) {
  //     this.employeeToDisplay = this.employees[this.arrayIndex];
  //     this.arrayIndex++;
  //   } else {
  //     this.employeeToDisplay = this.employees[0];
  //     this.arrayIndex = 1;
  //   }
  // }

  // onClick(employeeId: number) {
  //   this._router.navigate(['./employee', employeeId], {
  //     queryParams: { 'searchTerm': this.searchTerm, 'testParam': 'testValue' }
  //   });
  // }
  // changeEmployeeName() {

  //   // const newEmployeeArray:Employee[]=Object.assign([],this.employees);
  //   // newEmployeeArray[0].name="jordon";
  //   // this.employees=newEmployeeArray;
  //   this.employees[0].name = 'Jordon';
  //   this.filteredEmployees = this.filtereEmployees(this.searchTerm);
  // }
}
