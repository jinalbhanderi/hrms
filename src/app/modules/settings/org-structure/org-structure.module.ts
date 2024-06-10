import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgStructureRoutingModule } from './org-structure-routing.module';
import { ZoneComponent } from './zone/zone.component';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
import { CostCenterComponent } from './cost-center/cost-center.component';
import { BandsComponent } from './bands/bands.component';
import { SegmentComponent } from './segment/segment.component';
import { HubComponent } from './hub/hub.component';
import { TerritoryComponent } from './territory/territory.component';
import { RegionComponent } from './region/region.component';
import { AddZoneComponent } from './zone/add-zone/add-zone.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDialogModule } from '@angular/material/dialog';
import { AddBusinessUnitComponent } from './business-unit/add-business-unit/add-business-unit.component';
import { AddCostCenterComponent } from './cost-center/add-cost-center/add-cost-center.component';
import { AddBandComponent } from './bands/add-band/add-band.component';
import { AddSegmentComponent } from './segment/add-segment/add-segment.component';
import { AddHubComponent } from './hub/add-hub/add-hub.component';
import { AddRegionComponent } from './region/add-region/add-region.component';
import { AddTerritoryComponent } from './territory/add-territory/add-territory.component';


@NgModule({
  declarations: [
    ZoneComponent,
    BusinessUnitComponent,
    CostCenterComponent,
    BandsComponent,
    SegmentComponent,
    HubComponent,
    TerritoryComponent,
    RegionComponent,
    AddZoneComponent,
    AddBusinessUnitComponent,
    AddCostCenterComponent,
    AddBandComponent,
    AddSegmentComponent,
    AddHubComponent,
    AddRegionComponent,
    AddTerritoryComponent
  ],
  imports: [
    CommonModule,
    OrgStructureRoutingModule,
    NgSelectModule,
    MatDialogModule
  ]
})
export class OrgStructureModule { }
