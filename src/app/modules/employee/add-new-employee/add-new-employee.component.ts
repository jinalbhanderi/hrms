import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DefaultComponent } from './default/default.component';

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

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      onboardingField: [null],
      companyName: [null, Validators.required],
      legalEntityCompany: [null, Validators.required],
      employeeId: ['1136'],
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
      joiningDate: ['', Validators.required],
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
      startDate: [''], // You can add validators if needed
      endDate: [''], // You can add validators if needed
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

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
    } else {
      this.employeeForm.markAllAsTouched();
    }
    this.submitted = true;
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
  selectedDate = new FormControl(new Date());
}
