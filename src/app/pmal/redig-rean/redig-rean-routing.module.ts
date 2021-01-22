import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedigReanPage } from './redig-rean.page';

const routes: Routes = [
  {
    path: '',
    component: RedigReanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedigReanPageRoutingModule {}
