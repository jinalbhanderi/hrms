import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-employee-exit-task-list',
  templateUrl: './employee-exit-task-list.component.html',
  styleUrls: ['./employee-exit-task-list.component.css'],
})
export class EmployeeExitTaskListComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {}); 

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
