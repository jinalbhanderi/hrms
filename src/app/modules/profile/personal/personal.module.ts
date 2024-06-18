import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { LanguageModalComponent } from './basic-info/language-modal/language-modal.component';
import { PersonalRoutingModule } from './personal-routing.module';
import { AddressComponent } from './address/address.component';
import { FamilyInfoComponent } from './family-info/family-info.component';
import { EducationComponent } from './education/education.component';
import { PreviousEmployerComponent } from './previous-employer/previous-employer.component';
import { ActivityLogComponent } from './basic-info/activity-log/activity-log.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    LanguageModalComponent,
    BasicInfoComponent,
    AddressComponent,
    FamilyInfoComponent,
    EducationComponent,
    PreviousEmployerComponent,
    ActivityLogComponent,
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    FormsModule,
    NgSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgbDatepickerModule,
    ToastrModule.forRoot(),
  ],
})
export class PersonalModule {}
