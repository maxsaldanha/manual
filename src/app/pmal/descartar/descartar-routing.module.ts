import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescartarPage } from './descartar.page';

const routes: Routes = [
  {
    path: '',
    component: DescartarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescartarPageRoutingModule {}
