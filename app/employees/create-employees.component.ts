import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import { Employee } from '../models/empolyee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.scss']
})
export class CreateEmployeesComponent implements OnInit {
  @ViewChild('employeeForm', { static: true }) public CreateEmployeeForm: NgForm;
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee;
  panelTitle:string;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
  ];

  constructor(private _employeeService: EmployeeService,
    private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = + parameterMap.get('id');
      this.getEmployee(id);
    });
  }
  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        email: null,
        phoneNumber: null,
        contactPreferance: null,
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null,
      };
      this.panelTitle="Create Employee";
      this.CreateEmployeeForm.reset();
    } else {
      this.panelTitle="Edit Employee";
      this.employee = Object.assign({},this._employeeService.getEmployee(id));
    }
  }


  saveEmployee(): void {
    const newEmployee: Employee = Object.assign({}, this.employee);
    this._employeeService.save(newEmployee);
    this._router.navigate(['list']);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
