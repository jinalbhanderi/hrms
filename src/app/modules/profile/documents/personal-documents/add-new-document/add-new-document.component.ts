import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-document',
  templateUrl: './add-new-document.component.html',
  styleUrls: ['./add-new-document.component.css'],
})
export class AddNewDocumentComponent {
  item: any;
  documents = [
    'Aadhaar Card (UID)',
    'Voter ID',
    'Passport',
    'PAN Card',
    '10th Result',
    '12th Result',
    'Graduation Sem 1 Marksheet',
    'Graduation Sem 2 Marksheet',
    'Graduation Sem 3 Marksheet',
    'Graduation Sem 4 Marksheet',
    'Graduation Sem 5 Marksheet',
    'Graduation Sem 6 Marksheet',
    'Graduation Sem 7 Marksheet',
    'Graduation Sem 8 Marksheet',
    'Degree Certificate',
    'Master Sem 1 Marksheet',
    'Master Sem 2 Marksheet',
    'Master Sem 3 Marksheet',
    'Master Sem 4 Marksheet',
    'Master Degree Certificate',
    'Passport Size photo',
    'Updated Resume',
    'Experience letter of your last company',
    '3 months Pay slip of last company',
    'Relieving letter of last company',
    'Offer letter of last company',
    'Appraisal letter of last company',
    'Other Certificate',
  ];
  data: boolean = false;
  changeData(event: any) {
    this.data = true;
    this.item = event;
  }
}
