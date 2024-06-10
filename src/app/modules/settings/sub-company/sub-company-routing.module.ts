import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCompanyComponent } from './sub-company.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:'',component:SubCompanyComponent,
    children:[
      {path:'add',component:AddComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCompanyRoutingModule { }
