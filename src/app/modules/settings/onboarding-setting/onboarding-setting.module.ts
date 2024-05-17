import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingSettingRoutingModule } from './onboarding-setting-routing.module';
import { OnboardingFieldsComponent } from './onboarding-fields/onboarding-fields.component';
import { OnboardingTemplatesComponent } from './onboarding-templates/onboarding-templates.component';


@NgModule({
  declarations: [
    OnboardingFieldsComponent,
    OnboardingTemplatesComponent
  ],
  imports: [
    CommonModule,
    OnboardingSettingRoutingModule
  ]
})
export class OnboardingSettingModule { }
