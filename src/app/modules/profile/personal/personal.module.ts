import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { LanguageModalComponent } from './basic-info/language-modal/language-modal.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LanguageModalComponent,
    BasicInfoComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    FormsModule
  ]
})
export class PersonalModule { }
