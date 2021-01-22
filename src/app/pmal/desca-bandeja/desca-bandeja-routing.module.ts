import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescaBandejaPage } from './desca-bandeja.page';

const routes: Routes = [
  {
    path: '',
    component: DescaBandejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescaBandejaPageRoutingModule {}
