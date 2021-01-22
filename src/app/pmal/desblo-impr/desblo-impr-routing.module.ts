import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesbloImprPage } from './desblo-impr.page';

const routes: Routes = [
  {
    path: '',
    component: DesbloImprPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesbloImprPageRoutingModule {}
