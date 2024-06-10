import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location/location.component';
import { LocationBillingTypeComponent } from './location-billing-type/location-billing-type.component';
import { AddLocationComponent } from './location/add-location/add-location.component';


@NgModule({
  declarations: [
    LocationComponent,
    LocationBillingTypeComponent,
    AddLocationComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
