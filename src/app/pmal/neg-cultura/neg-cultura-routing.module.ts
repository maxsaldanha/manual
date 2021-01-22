import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegCulturaPage } from './neg-cultura.page';

const routes: Routes = [
  {
    path: '',
    component: NegCulturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegCulturaPageRoutingModule {}
