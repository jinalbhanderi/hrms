import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.css'],
})
export class FamilyInfoComponent {
  familyForm: FormGroup;
  relationships = ['Brother', 'Sister', 'Mother', 'Father', 'Spouse'];
  showAdditionalFields: boolean = false;

  constructor(private fb: FormBuilder) {
    this.familyForm = this.fb.group({
      relationship: [''],
      name: [''],
      dob: [''],
      occupation: [''],
    });
  }

  onRelationshipChange(event: any) {
    this.showAdditionalFields = !!event;
  }
}
