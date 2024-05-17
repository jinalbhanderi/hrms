import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingFieldsComponent } from './onboarding-fields/onboarding-fields.component';
import { OnboardingTemplatesComponent } from './onboarding-templates/onboarding-templates.component';

const routes: Routes = [
  {path:'onboarding-fields' ,component:OnboardingFieldsComponent},
  {path:'onboarding-templates' ,component:OnboardingTemplatesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingSettingRoutingModule { }
