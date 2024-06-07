import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { MyCompOffComponent } from './my-comp-off.component';

const routes: Routes = [
  {
    path: '',
    component: MyCompOffComponent,
    children: [{ path: 'add', component: AddComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCompOffRoutingModule {}
