import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgStructureRoutingModule } from './org-structure-routing.module';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
import { CostCenterComponent } from './cost-center/cost-center.component';
import { BandsComponent } from './bands/bands.component';
import { SegmentComponent } from './segment/segment.component';
import { HubComponent } from './hub/hub.component';
import { RegionComponent } from './region/region.component';
import { TerritoryComponent } from './territory/territory.component';
import { ZoneComponent } from './zone/zone.component';


@NgModule({
  declarations: [
    BusinessUnitComponent,
    CostCenterComponent,
    BandsComponent,
    SegmentComponent,
    HubComponent,
    RegionComponent,
    TerritoryComponent,
    ZoneComponent
  ],
  imports: [
    CommonModule,
    OrgStructureRoutingModule
  ]
})
export class OrgStructureModule { }
