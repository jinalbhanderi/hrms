import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  employeeId: any;
  contactForm!: FormGroup;
  formChanged: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      workEmail: [''],
      userName: [''],
      moNumber: [''],
      homePhoneNo: [''],
      personalEmail: [''],
      linkdinUrl: [''],
      twitterUrl: [''],
      skyupId: [''],
    });
  }
  ngOnInit(): void {
    this.employeeId = this.route.snapshot.queryParams['id'];
    if (this.employeeId) {
      this.getEmpContactData();
    }
    this.contactForm.valueChanges.subscribe(() => {
      this.formChanged = this.contactForm.dirty;
    });
  }
  getEmpContactData(): void {
    this.employeeService
      .getEmployeeDataById(this.employeeId)
      .subscribe((res: any) => {
        console.log("rees",res);
        
        this.contactForm.patchValue({
          workEmail: res?.workEmail,
          userName: res?.userName,
          moNumber: res?.moNumber,
          homePhoneNo: res?.homePhoneNo,
          personalEmail: res?.personalEmail,
          linkdinUrl: res?.linkdinUrl,
          twitterUrl: res?.twitterUrl,
          skyupId: res?.skyupId,
        });
        this.contactForm.markAsPristine();
        this.formChanged = false;
      });
  }

  discardChanges(): void {
    this.getEmpContactData();
  }

  saveChanges(): void {
    if (this.contactForm.valid && this.contactForm.dirty) {
      const updatedData = this.contactForm.value;
      this.employeeService
        .updateEmployeeData(this.employeeId, updatedData)
        .subscribe(
          (response) => {
            console.log('Employee data updated successfully:', response);
            this.contactForm.markAsPristine();
            this.formChanged = false; 
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
