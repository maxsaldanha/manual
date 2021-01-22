import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnularExamePage } from './anular-exame.page';

const routes: Routes = [
  {
    path: '',
    component: AnularExamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnularExamePageRoutingModule {}
