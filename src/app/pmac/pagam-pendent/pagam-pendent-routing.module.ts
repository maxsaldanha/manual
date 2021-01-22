import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamPendentPage } from './pagam-pendent.page';

const routes: Routes = [
  {
    path: '',
    component: PagamPendentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamPendentPageRoutingModule {}
