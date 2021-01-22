import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoAtendiPage } from './info-atendi.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAtendiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoAtendiPageRoutingModule {}
