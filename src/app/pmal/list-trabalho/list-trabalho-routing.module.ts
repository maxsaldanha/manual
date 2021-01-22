import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTrabalhoPage } from './list-trabalho.page';

const routes: Routes = [
  {
    path: '',
    component: ListTrabalhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTrabalhoPageRoutingModule {}
