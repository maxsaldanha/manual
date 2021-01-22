import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgenExamePage } from './agen-exame.page';

const routes: Routes = [
  {
    path: '',
    component: AgenExamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenExamePageRoutingModule {}
