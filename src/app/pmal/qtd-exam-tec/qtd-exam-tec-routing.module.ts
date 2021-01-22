import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QtdExamTecPage } from './qtd-exam-tec.page';

const routes: Routes = [
  {
    path: '',
    component: QtdExamTecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QtdExamTecPageRoutingModule {}
