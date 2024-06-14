import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.css'],
})
export class EmployeeDirectoryComponent {
  employees!: any[];

  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployeeData().subscribe(
      (data) => {
        this.employees = data;
        console.log('Employees:', this.employees);
        this.sortByFirstName();
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  sortByFirstName(): void {
    this.employees.sort((a, b) => {
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.firstName) return 1;
      return 0;
    });
  }

  
}
