import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorreLaudoPage } from './corre-laudo.page';

const routes: Routes = [
  {
    path: '',
    component: CorreLaudoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorreLaudoPageRoutingModule {}
