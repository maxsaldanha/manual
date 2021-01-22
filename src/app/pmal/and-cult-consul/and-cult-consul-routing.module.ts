import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndCultConsulPage } from './and-cult-consul.page';

const routes: Routes = [
  {
    path: '',
    component: AndCultConsulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndCultConsulPageRoutingModule {}
