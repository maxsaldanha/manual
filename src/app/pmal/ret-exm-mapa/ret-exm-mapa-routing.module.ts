import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetExmMapaPage } from './ret-exm-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: RetExmMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetExmMapaPageRoutingModule {}
