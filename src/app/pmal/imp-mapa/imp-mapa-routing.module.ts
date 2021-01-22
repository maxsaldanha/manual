import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImpMapaPage } from './imp-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: ImpMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImpMapaPageRoutingModule {}
