import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { LocationBillingTypeComponent } from './location-billing-type/location-billing-type.component';

const routes: Routes = [
  { path: 'location', component: LocationComponent },
  { path: 'location-billing-type', component: LocationBillingTypeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
