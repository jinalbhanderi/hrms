import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationForm!: FormGroup;

  // Dummy data for degrees (replace with your actual data source)
  degrees = ['Bachelor', 'Master', 'PhD'];
  formChanged!: boolean;
  employeeId: any;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.queryParams['id'];
    this.initForm();
    if (this.employeeId) {
      this.getEducationData();
    }
  }

  initForm() {
    this.educationForm = this.fb.group({
      educations: this.fb.array([this.createEducation()]),
    });
  }

  get educations() {
    return this.educationForm.get('educations') as FormArray;
  }

  createEducation(): FormGroup {
    return this.fb.group({
      empId: [this.employeeId],
      id: [null],
      degree: ['', Validators.required],
      university: ['', Validators.required],
      specialization: ['', Validators.required],
      startMonthYear: ['', Validators.required],
      endMonthYear: ['', Validators.required],
    });
  }

  addEducation() {
    if (this.educations.length < 5) {
      this.educations.push(this.createEducation());
    }
  }

  removeEducation(index: number) {
    this.educations.removeAt(index);
  }

  discard() {
    this.initForm();
  }

  onSubmit(AducationInfo: any) {
    this.employeeService
      .addAducationInfo(this.employeeId, AducationInfo)
      .subscribe(
        (response) => {
          this.educationForm.patchValue({ id: response.id });
          this.educationForm.markAsPristine();
          // this.formChanged = false;
          alert('Aducation information Add successfully!');
        },
        (error) => {
          console.error('Error adding Aducation information:', error);
          alert('Failed to add Aducation information. Please try again.');
        }
      );
  }

  getEducationData() {
    debugger;
    this.employeeService.getempAducationDataById(this.employeeId).subscribe(
      (res: any) => {
        debugger;
        if (res && res.length > 0) {
          const educationData = res[0];
          this.educationForm.patchValue({ ...educationData });
        } else {
          console.error('No Aducation data found.');
        }
      },
      (error) => {
        console.error('Error fetching Aducation information:', error);
      }
    );
  }
}
