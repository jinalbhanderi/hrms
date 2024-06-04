import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { LanguageModalComponent } from './basic-info/language-modal/language-modal.component';
import { PersonalRoutingModule } from './personal-routing.module';

@NgModule({
  declarations: [LanguageModalComponent, BasicInfoComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    FormsModule,
    NgSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class PersonalModule {}
