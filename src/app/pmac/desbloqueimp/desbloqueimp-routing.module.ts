import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesbloqueimpPage } from './desbloqueimp.page';

const routes: Routes = [
  {
    path: '',
    component: DesbloqueimpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesbloqueimpPageRoutingModule {}
