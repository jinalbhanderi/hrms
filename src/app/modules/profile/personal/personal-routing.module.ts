import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { FamilyInfoComponent } from './family-info/family-info.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { EducationComponent } from './education/education.component';
import { PreviousEmployerComponent } from './previous-employer/previous-employer.component';
import { HealthBenefitComponent } from './health-benefit/health-benefit.component';
import { VaccinationStatusComponent } from './vaccination-status/vaccination-status.component';
import { PagenotfoundComponent } from '../../pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'basic-info', pathMatch: 'full' },
  { path: 'basic-info', component: BasicInfoComponent },
  { path: 'family-info', component: FamilyInfoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'address', component: AddressComponent },
  { path: 'education', component: EducationComponent },
  { path: 'previous-employer', component: PreviousEmployerComponent },
  { path: 'health-benefit', component: HealthBenefitComponent },
  { path: 'vaccination-status', component: VaccinationStatusComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalRoutingModule {}
