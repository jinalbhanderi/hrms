import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterComponent } from './filter/filter.component';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  selectedOption: string = '';
  employees!: any[];
  employeeData: any;

  constructor(
    public dialog: MatDialog,
    private employeeService: EmployeeService,
   private router:Router
  ) {}

  ngOnInit(): void {
    this.getEmployeeData();
  }

  openModal(): void {
    const dialogRef = this.dialog.open(FilterComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  getEmployeeData() {
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
  getEmployeeIdData(eId: any) {
    this.employeeService.getEmployeeDataById(eId).subscribe((res: any) => {
      this.employeeService.changeEmployeeData(res);
      console.log("emlyee-a" ,res);    
      this.router.navigate([`employees/${eId}/personal/basic-info`]);
    });
  }
}
