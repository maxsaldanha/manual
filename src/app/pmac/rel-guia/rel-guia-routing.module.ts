import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelGuiaPage } from './rel-guia.page';

const routes: Routes = [
  {
    path: '',
    component: RelGuiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelGuiaPageRoutingModule {}
