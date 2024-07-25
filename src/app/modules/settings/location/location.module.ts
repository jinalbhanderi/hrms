import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location/location.component';
import { LocationBillingTypeComponent } from './location-billing-type/location-billing-type.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    LocationComponent,
    LocationBillingTypeComponent,
    AddLocationComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule, NgSelectModule
  ]
})
export class LocationModule { }
