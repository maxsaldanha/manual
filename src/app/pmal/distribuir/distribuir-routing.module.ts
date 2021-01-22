import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistribuirPage } from './distribuir.page';

const routes: Routes = [
  {
    path: '',
    component: DistribuirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistribuirPageRoutingModule {}
