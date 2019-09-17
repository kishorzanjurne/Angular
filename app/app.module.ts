import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { CreateEmployeesComponent } from './employees/create-employees.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { ConfirmEqualValidorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { SampleComponent } from './employees/sample/sample.component';
import { MypipePipe } from './employees/mypipe.pipe';


const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'sample', component: SampleComponent },
  {
    path: 'edit/:id',
    component: CreateEmployeesComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  { path: 'employee/:id', component: EmployeeDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeesComponent,
    ListEmployeesComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent, EmployeeFilterPipe, SampleComponent, MypipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
