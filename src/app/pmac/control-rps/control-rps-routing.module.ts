import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlRpsPage } from './control-rps.page';

const routes: Routes = [
  {
    path: '',
    component: ControlRpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlRpsPageRoutingModule {}
