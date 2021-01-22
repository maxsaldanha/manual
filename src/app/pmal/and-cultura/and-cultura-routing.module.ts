import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndCulturaPage } from './and-cultura.page';

const routes: Routes = [
  {
    path: '',
    component: AndCulturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndCulturaPageRoutingModule {}
