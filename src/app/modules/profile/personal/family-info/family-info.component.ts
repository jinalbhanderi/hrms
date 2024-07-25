// Import necessary components/interfaces
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { FamilyInfo } from 'src/app/interface/profile/personal';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.css'],
})
export class FamilyInfoComponent implements OnInit {
  relationships = ['Brother', 'Sister', 'Mother', 'Father', 'Spouse'];
  showAdditionalFields = false;
  employeeId: any;
  familyInfo!: FormGroup;
  formChanged = false;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.queryParams['id'];
    this.initForm();
    if (this.employeeId) {
      this.subscribeToFormChanges();
      this.getFamilyData();
    }
  }

  private initForm(): void {
    this.familyInfo = this.fb.group({
      empId: [this.employeeId],
      id: [null],
      relationship: [null, Validators.required],
      name: ['', Validators.required],
      dob: [null, Validators.required],
      occupation: ['', Validators.required],
    });
  }

  private subscribeToFormChanges(): void {
    this.familyInfo.valueChanges.subscribe(() => {
      this.formChanged = this.familyInfo.dirty;
    });

    this.familyInfo.get('relationship')!.valueChanges.subscribe((value) => {
      this.showAdditionalFields = !!value;
    });
  }

  private getFamilyData(): void {
    this.employeeService.getempFamilyDataById(this.employeeId).subscribe(
      (res: any) => {
        if (res && res.length > 0) {
          const familyData = res[0];
          this.familyInfo.patchValue({
            ...familyData,
            dob: this.parseDate(familyData.dob),
          });
          this.showAdditionalFields = !!familyData.relationship;
        }
      },
      (error) => console.error('Error fetching family information:', error)
    );
  }

  private parseDate(dateString: string): NgbDateStruct | null {
    if (!dateString) return null;
    const [year, month, day] = dateString.split('-').map(Number);
    return { year, month, day };
  }

  saveFamilyInfo(): void {
    if (this.familyInfo.valid) {
      const updatedFamilyInfo: FamilyInfo = {
        ...this.familyInfo.value,
        empId: this.employeeId,
        dob: this.formatDate(this.familyInfo.value.dob),
      };
      if (updatedFamilyInfo.id) {
        this.updateFamilyInfo(updatedFamilyInfo.id, updatedFamilyInfo);
      } else {
        this.addFamilyInfo(updatedFamilyInfo);
      }
    } else {
      console.error('Form is invalid. Cannot update family info.');
      this.logValidationErrors(this.familyInfo);
    }
  }

  updateFamilyInfo(
    updatedFamilyInfoId: any,
    updatedFamilyInfo: FamilyInfo
  ): void {
    this.employeeService
      .updateEmpFamilyData(updatedFamilyInfoId, updatedFamilyInfo)
      .subscribe(
        (response) => {
          this.familyInfo.patchValue(response);
          this.familyInfo.markAsPristine();
          this.formChanged = false;
          this.getFamilyData();
          alert('Family information updated successfully!');
        },
        (error) => {
          console.error('Error updating family information:', error);
          alert('Failed to update family information. Please try again.');
        }
      );
  }

  private formatDate(date: NgbDateStruct | null): string | null {
    if (!date) return null;
    const formattedDate = `${date.year}-${this.padNumber(
      date.month!
    )}-${this.padNumber(date.day!)}`;
    return formattedDate;
  }

  private padNumber(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }

  private addFamilyInfo(updatedFamilyInfo: FamilyInfo): void {
    this.employeeService
      .addFamilyInfo(this.employeeId, updatedFamilyInfo)
      .subscribe(
        (response) => {
          this.familyInfo.patchValue(response);
          // this.familyInfo.controls['id'].setValue(response.id);
          this.familyInfo.markAsPristine();
          this.formChanged = false;
          alert('Family information added successfully!');
        },
        (error) => {
          console.error('Error adding family information:', error);
          alert('Failed to add family information. Please try again.');
        }
      );
  }

  discardChanges(): void {
    this.getFamilyData();
  }

  private logValidationErrors(group: FormGroup = this.familyInfo): void {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.get(key);
      if (control && control.invalid) {
        const errors = control.errors;
        if (errors) {
          console.error('Validation error in:', key, errors);
        }
      }
    });
  }
}
