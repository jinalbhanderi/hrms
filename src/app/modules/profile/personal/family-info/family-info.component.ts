import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.css'],
})
export class FamilyInfoComponent implements OnInit {
  relationships = ['Brother', 'Sister', 'Mother', 'Father', 'Spouse'];
  showAdditionalFields: boolean = false;
  employeeId: any;
  familyInfo!: FormGroup;
  formChanged: boolean = false;
  private subscription!: Subscription;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.familyInfo = this.fb.group({
      relationship: [''],
      name: [''],
      dob: [''],
      occupation: [''],
    });
  }
  ngOnInit(): void {
    this.employeeId = this.route.snapshot.queryParams['id'];
    if (this.employeeId) {
      this.getFamilyData();
    }
    this.familyInfo.valueChanges.subscribe(() => {
      this.formChanged = this.familyInfo.dirty;
    });
  }
  onRelationshipChange(event: any) {
    this.showAdditionalFields = event;
  }

  getFamilyData() {
    this.subscription = this.employeeService
      .getEmployeeDataById(this.employeeId)
      .subscribe((res: any) => {
        this.familyInfo.patchValue({});
      });
  }

  saveFamilyInfo(): void {
    if (this.familyInfo.valid && this.familyInfo.dirty) {
      const updatedData = this.familyInfo.value;
      this.employeeService
        .updateEmployeeData(this.employeeId, updatedData)
        .subscribe(
          (response) => {
            console.log('Employee data updated successfully:', response);
            this.familyInfo.markAsPristine(); // Mark the form as pristine after successful save
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
}
