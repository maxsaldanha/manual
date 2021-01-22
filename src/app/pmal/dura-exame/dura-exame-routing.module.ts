import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuraExamePage } from './dura-exame.page';

const routes: Routes = [
  {
    path: '',
    component: DuraExamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuraExamePageRoutingModule {}
