import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { AgreementInfoComponent } from './agreement-info/agreement-info.component';
import { CompensationComponent } from './compensation/compensation.component';
import { ResignationComponent } from './resignation/resignation.component';
import { HistoryComponent } from './history/history.component';
import { ProbationComponent } from './probation/probation.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent } ,
  { path: 'agreement-info', component: AgreementInfoComponent } ,
  { path: 'compensation', component:CompensationComponent  } ,
  { path: 'resignation', component: ResignationComponent } ,
  { path: 'history', component: HistoryComponent } ,
  { path: 'probation', component: ProbationComponent } ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
