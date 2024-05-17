import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
import { BandsComponent } from './bands/bands.component';
import { SegmentComponent } from './segment/segment.component';
import { HubComponent } from './hub/hub.component';
import { RegionComponent } from './region/region.component';
import { TerritoryComponent } from './territory/territory.component';
import { ZoneComponent } from './zone/zone.component';
import { CostCenterComponent } from './cost-center/cost-center.component';

const routes: Routes = [
  {path:'business-unit',component:BusinessUnitComponent},
  {path:'cost-center' ,component:CostCenterComponent},
  {path:'bands' ,component: BandsComponent},
  {path:'segment' ,component: SegmentComponent},
  {path:'hub' ,component: HubComponent},
  {path:'region' ,component:RegionComponent},
  {path:'territory' ,component:TerritoryComponent},
  {path:'zone' ,component: ZoneComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgStructureRoutingModule { }
