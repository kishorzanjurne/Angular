import {CreateEmployeesComponent} from './create-employees.component';
import {CanDeactivate, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeesComponent> {
  canDeactivate(component: CreateEmployeesComponent): boolean {
    if (component.CreateEmployeeForm.dirty) {
      return confirm('Are you sure you want to discard your changes ?');
    }
    return true;

  }

}
