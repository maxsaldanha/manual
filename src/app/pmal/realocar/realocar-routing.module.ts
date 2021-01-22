import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealocarPage } from './realocar.page';

const routes: Routes = [
  {
    path: '',
    component: RealocarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealocarPageRoutingModule {}
