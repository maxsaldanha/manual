import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeescontoPage } from './deesconto.page';

const routes: Routes = [
  {
    path: '',
    component: DeescontoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeescontoPageRoutingModule {}
