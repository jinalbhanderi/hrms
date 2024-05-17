import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import { PayCodesComponent } from './pay-codes/pay-codes.component';

const routes: Routes = [
  { path: 'policy', component: PolicyComponent },
  { path: 'pay-codes', component: PayCodesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvertimePolicyRoutingModule {}
