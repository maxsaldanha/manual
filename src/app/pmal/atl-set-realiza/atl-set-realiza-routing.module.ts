import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtlSetRealizaPage } from './atl-set-realiza.page';

const routes: Routes = [
  {
    path: '',
    component: AtlSetRealizaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtlSetRealizaPageRoutingModule {}
