import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from './default/default.component';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css'],
})
export class AddNewEmployeeComponent {
  sendWelcomeKit: boolean = false;
  startProcess: boolean = false;
  sendEmail: boolean = false;
  employeeForm!: FormGroup<any>;
  submitted = false;
  showTemplateDetails: boolean = false;
  model!: NgbDateStruct;
  employees: any[] = [];
  currentId: number = 0;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.createEmployeeForm();
  }

  createEmployeeForm() {
    this.employeeForm = this.fb.group({
      dp: [null],
      startProcess: [''],
      sendWelcomeKit: [''],
      sendEmail: [''],
      onboardingField: [null],
      companyName: [null, Validators.required],
      legalEntityCompany: [null, Validators.required],
      employeeId: [{ value: this.generateId(), disabled: true }],
      displayName: [''],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      gender: [null],
      maritalStatus: [null],
      dob: [''],
      bloodGroup: [null],
      ledgerCode: [''],
      moNumber: [''],
      userName: [''],
      workEmail: [''],
      password: [''],
      joiningDate: [Validators.required],
      location: [null, Validators.required],
      jobTitle: [null, Validators.required],
      category: [null],
      department: [null, Validators.required],
      subDepartment: [null],
      reportingManager: [null],
      lineManager: [null],
      lineManager2: [null],
      employmentStatus: [null, Validators.required],
      comments: [''],
      startDate: [],
      endDate: [],
      compensationPeriod: [''],
      newSalary: [''],
      payFrequency: [null],
      noticePeriod: [''],
      compPeriod: [''],
      salaryMode: [''],
      compensationDescription: [''],
      isLeaveBonusBenefit: [false],
      applyBonus: [false],
      taxRegime: [''],
      skipFromPayroll: [false],
      payrollType: [false],
      isEPF: [false],
      isESIC: [false],
      // taxRegime: ['Default'],
      businessUnit: [null],
      costCenter: [null],
      bands: [null],
      segment: [null],
      hub: [null],
      territory: [null],
      region: [null],
      timezone: [null],
      leavePolicy: [''],
      documentPolicy: [null],
      costCenterData: [null],
      overtimePolicy: [null],
      holiday: [null],
      clockInPolicy: [null],
      compOffPolicy: [null],
      weekendPolicy: [null],
      penalisationPolicy: [null],
      onDutyPolicy: [null],
      isAssignWorkDiary: [false],
      deviceList: [null],
    });
  }

  generateId(): number {
    return this.currentId++;
  }

  onSendWelcomeKitChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.sendWelcomeKit = isChecked;
    this.sendEmail = isChecked;
  }

  onStartProcessChange(event: Event) {
    this.startProcess = (event.target as HTMLInputElement).checked;
  }

  onSendEmailChange(event: Event) {
    if (!this.sendWelcomeKit) {
      this.sendEmail = (event.target as HTMLInputElement).checked;
      console.log('Send Email checkbox changed:', this.sendEmail);
    }
  }

  onOnboardingFieldChange() {
    const selectedValue = this.employeeForm.get('onboardingField')?.value;
    this.showTemplateDetails = selectedValue === 'Default';
  }

  openModal(): void {
    const dialogRef = this.dialog.open(DefaultComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe(
        (employee) => {
          console.log('Employee added successfully:', employee);
          this.employees.push(employee);
          // alert('Employee Data Add successfully');
          this.employeeForm.reset();
        },
        (error) => {
          console.error('Error adding employee:', error);
        }
      );
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }
}
