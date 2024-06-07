import { Component } from '@angular/core';

@Component({
  selector: 'app-my-overtime',
  templateUrl: './my-overtime.component.html',
  styleUrls: ['./my-overtime.component.css'],
})
export class MyOvertimeComponent {
  overtime: string = 'Pending';
}
