import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Address } from 'src/app/interface/profile/personal';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  countries: string[] = [
    'Bangladesh',
    'Barbados',
    'Canada',
    'Chad',
    'Congo',
    'Costa Rica',
    'El Salvador',
    'Eritrea',
    'Greece',
    'Guatemala',
    'Guyana',
    'Honduras',
    'Iran',
    'Kiribati',
    'Kuwait',
    'Macedonia',
    'Malaysia',
    'Malta',
    'Mauritania',
    'Mexico',
    'Philippines',
    'Russia',
    'Saint Lucia',
    'Saudi Arabia',
    'Senegal',
    'South Africa',
    'Thailand',
    'Trinidad And Tobago',
    'Angola',
    'Argentina',
    'Benin',
    'Bosnia and Herzegovina',
    'Colombia',
    'Djibouti',
    'East Timor',
    'Ecuador',
    'Egypt',
    'Fiji Islands',
    'Gabon',
    'Iceland',
    'Iraq',
    'Italy',
    'Kazakhstan',
    'Luxembourg',
    'Portugal',
    'Serbia',
    'Sweden',
    'Taiwan',
    'Azerbaijan',
    'Burkina Faso',
    'Cambodia',
    'Cameroon',
    'Cape Verde',
    'Central African Republic',
    'Cuba',
  ];

  employeeId: any;
  addressForm!: FormGroup;
  formChanged: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.queryParams['id'];
    this.initForm();
    if (this.employeeId) {
      this.getAddressData();
    }
  }

  private initForm(): void {
    this.addressForm = this.fb.group({
      empId: [this.employeeId],
      id: [null],
      addressOne: [''],
      addressTwo: [''],
      city: [''],
      country: [''],
      state: [''],
      pincode: [''],
      pAddressOne: [''],
      pAddressTwo: [''],
      pcity: [''],
      pCountry: [''],
      pState: [''],
      ppcode: [''],
    });

    this.addressForm.valueChanges.subscribe(() => {
      this.formChanged = this.addressForm.dirty;
    });
  }

  getAddressData() {
    this.employeeService.getempAddressDataById(this.employeeId!).subscribe(
      (res: any) => {
        if (res && res.length > 0) {
          const addressData = res[0];
          this.addressForm.patchValue({ 
            ...addressData,
          });
        } else {
          console.error('No address data found.');
        }
      },
      (error) => {
        console.error('Error fetching address information:', error);
      }
    );
  }

  saveAddressInfo(): void {
    if (this.addressForm.valid) {
      const addressInfo: Address = {...this.addressForm.value,empId: this.employeeId};
      if (addressInfo.id) {
        this.updateAddressData(addressInfo.id, addressInfo);
      } else {
        this.addAddress(addressInfo);
      }
    } else {
      console.error('Form is invalid. Cannot save address info.');
      this.logValidationErrors(this.addressForm);
    }
  }

  updateAddressData(addressInfoId: string, addressInfo: Address) {
    this.employeeService
      .updateEmpAddressData(addressInfoId, addressInfo)
      .subscribe(
        (response) => {
          this.addressForm.patchValue(response);
          this.addressForm.markAsPristine();
          this.formChanged = false;
          alert('Address information updated successfully!');
        },
        (error) => {
          console.error('Error updating address information:', error);
          alert('Failed to update address information. Please try again.');
        }
      );
  }

  addAddress(addressInfo: Address) {
    this.employeeService
      .addEmpAdressData(this.employeeId, addressInfo)
      .subscribe(
        (response) => {
          this.addressForm.patchValue({ id: response.id });
          this.addressForm.markAsPristine();
          this.formChanged = false;
          alert('Address information Add successfully!');
        },
        (error) => {
          console.error('Error adding address information:', error);
          alert('Failed to add address information. Please try again.');
        }
      );
  }

  discardChanges(): void {
    this.getAddressData();
  }

  private logValidationErrors(group: FormGroup = this.addressForm): void {
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
