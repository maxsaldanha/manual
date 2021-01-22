import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemesGuiaPage } from './remes-guia.page';

const routes: Routes = [
  {
    path: '',
    component: RemesGuiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemesGuiaPageRoutingModule {}
