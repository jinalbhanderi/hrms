import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { LanguageModalComponent } from './language-modal/language-modal.component';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

interface Language {
  language: any;
  reading: any;
  speaking: any;
  writing: any;
  understanding: any;
}

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
})
export class BasicInfoComponent {
  showPopup = false;
  isCheckboxChecked: boolean = false;
  isESIChecked: boolean = false;
  selectedCity: any;
  showNestedCheckboxes: boolean = false;
  employeeData: any;
  employeeId: any;
  employeeForm!: FormGroup;
  languages: Language[] = [];
  formChanged: boolean = false;
  submitted = false;

  private subscription!: Subscription;

  cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' },
  ];

  constructor(
    public dialog: MatDialog,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.employeeForm = this.fb.group({
      companyName: ['', Validators.required],
      legalEntityCompany: [null, Validators.required],
      employeeId: [''],
      joiningDate: [''],
      displayName: [''],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      dob: [''],
      maritalStatus: [null],
      gender: [null],
      bornPlace: [null],
      nationality: [null],
      bloodGroup: [null],
      ledgerCode: [''],
      startProcess: [''],
      sendWelcomeKit: [''],
      sendEmail: [''],
      onboardingField: [null],
      moNumber: [''],
      userName: [''],
      workEmail: [''],
      password: [''],
      location: [''],
      jobTitle: [''],
      category: [null],
      department: [''],
      subDepartment: [null],
      reportingManager: [null],
      lineManager: [null],
      lineManager2: [null],
      employmentStatus: [''],
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
      languages: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.queryParams['id'];
    if (this.employeeId) {
      this.getEmployeeData();
    }
    this.employeeForm.valueChanges.subscribe(() => {
      this.formChanged = this.employeeForm.dirty; // Update formChanged based on dirty state
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  formatDate(date: any): NgbDateStruct | null {
    if (!date) return null;
    return {
      year: date.year,
      month: date.month,
      day: date.day,
    };
  }

  getEmployeeData(): void {
    debugger;
    this.subscription = this.employeeService
      .getEmployeeDataById(this.employeeId)
      .subscribe((res: any) => {
        this.employeeForm.patchValue({
          companyName: res?.companyName,
          legalEntityCompany: res?.legalEntityCompany,
          employeeId: res?.employeeId,
          joiningDate: this.formatDate(res?.joiningDate),
          displayName: res?.displayName,
          firstName: res?.firstName,
          middleName: res?.middleName,
          lastName: res?.lastName,
          dob: this.formatDate(res?.dob),
          maritalStatus: res?.maritalStatus,
          gender: res?.gender,
          bornPlace: res?.bornPlace,
          nationality: res?.nationality,
          bloodGroup: res?.bloodGroup,
          ledgerCode: res?.ledgerCode,
          workEmail: res?.workEmail,
          employmentStatus: res.employmentStatus,
          jobTitle: res.jobTitle,
          category: res.category,
          department: res.department,
          location: res.location,
        });
        debugger;
        if (res?.languages) {
          const languageArray = this.employeeForm.get('languages') as FormArray;
          languageArray.clear();
          res.languages.forEach((lang: Language) => {
            languageArray.push(
              this.fb.group({
                language: [lang.language],
                reading: [lang.reading],
                speaking: [lang.speaking],
                writing: [lang.writing],
                understanding: [lang.understanding],
              })
            );
          });
        }
        this.employeeForm.markAsPristine();
        this.formChanged = false;
      });
  }
  
  get languagesForms() {
    return this.employeeForm.get('languages') as FormArray;
  }
  addLanguage(lang: Language) {
    const languageArray = this.employeeForm.get('languages') as FormArray;
    languageArray.push(
      this.fb.group({
        language: [lang.language],
        reading: [lang.reading],
        speaking: [lang.speaking],
        writing: [lang.writing],
        understanding: [lang.understanding],
      })
    );
  }

  toggleCheckbox() {
    this.isCheckboxChecked = !this.isCheckboxChecked;
  }
  openPopup() {
    this.showPopup = true;
  }
  toggleESICheckbox() {
    this.isESIChecked = !this.isESIChecked;
  }

  toggleNestedCheckboxes(event: any) {
    this.showNestedCheckboxes = event.target.checked;
  }
  closePopup() {
    this.showPopup = false;
  }

  openLanguageModal(language?: Language, index?: number): void {
    const dialogRef = this.dialog.open(LanguageModalComponent, {
      width: '600px',
      data: language ? { ...language, index } : { index: -1 }, // Pass the language data and the index to the modal, or indicate it's a new language
    });

    dialogRef.componentInstance.saveLanguage.subscribe((result: Language) => {
      if (
        index !== undefined &&
        index >= 0 &&
        index < this.languagesForms.length
      ) {
        this.languagesForms.at(index).patchValue(result); // Update existing language in FormArray
      } else {
        this.addLanguage(result); // Add new language to FormArray
      }
    });
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ActivityLogComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  discardChanges(): void {
    this.getEmployeeData();
  }

  saveChanges(): void {
    if (this.employeeForm.valid && this.employeeForm.dirty) {
      const updatedData = this.employeeForm.value;
      this.employeeService
        .updateEmployeeData(this.employeeId, updatedData)
        .subscribe(
          (response) => {
            console.log('Employee data updated successfully:', response);
            this.employeeForm.markAsPristine(); // Mark the form as pristine after successful save
            this.formChanged = false; // Reset formChanged flag
          },
          (error) => {
            console.error('Error updating employee data:', error);
          }
        );
    } else {
      console.error('Form is invalid or no changes made. Cannot save.');
    }
  }

  deleteLanguage(index: number) {
    const languageArray = this.employeeForm.get('languages') as FormArray;
    languageArray.removeAt(index);
    this.formChanged = true; // Update form changed state
  }

  editLanguage(index: number): void {
    const lang = this.languagesForms.at(index).value;
    const dialogRef = this.dialog.open(LanguageModalComponent, {
      width: '600px',
      data: { ...lang, index }, // Pass the language data and the index to the modal
    });

    dialogRef.componentInstance.saveLanguage.subscribe((result: Language) => {
      this.languagesForms.at(index).patchValue(result); // Update existing language in FormArray with new values
    });
  }
}
