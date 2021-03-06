import { Injectable } from '@angular/core';
import { Employee } from '../models/empolyee.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Henry',
            gender: 'Male',
            contactPreferance: 'Email',
            phoneNumber: 2132398373,
            dateOfBirth: new Date('11/20/1972'),
            department: 'IT',
            isActive: true,
            photoPath: 'assets/images/image2.jpg'
        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreferance: 'Phone',
            phoneNumber: 2132398373,
            dateOfBirth: new Date('11/20/1970'),
            department: 'HR',
            isActive: true,
            photoPath: 'assets/images/image1.jpg'
        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreferance: 'Phone',
            phoneNumber: 2132398373,
            dateOfBirth: new Date('11/20/1975'),
            department: 'HR',
            isActive: true,
            photoPath: 'assets/images/image2.jpg'
        }
    ];

    getEmployees(): Observable<Employee[]> {
        return Observable.of(this.listEmployees).delay(2000);
    }
    getEmployee(id: number): Employee {
        return this.listEmployees.find(e => e.id === id);
    }

    save(employee: Employee) {
        if (employee.id === null) {
            const maxid = this.listEmployees.reduce(function (e1, e2) {
                return (e1.id > e2.id) ? e1 : e2;
            }).id;
            employee.id = maxid + 1;
            this.listEmployees.push(employee);
        }
        else {
            const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id)
            this.listEmployees[foundIndex] = employee;
        }
    }

    deleteEmployee(id: number) {
        const i = this.listEmployees.findIndex(e => e.id === id);
        if (i !== -1) {
            this.listEmployees.splice(i, 1);
        }
    }
}
