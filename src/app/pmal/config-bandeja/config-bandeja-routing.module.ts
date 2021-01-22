import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigBandejaPage } from './config-bandeja.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigBandejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigBandejaPageRoutingModule {}
