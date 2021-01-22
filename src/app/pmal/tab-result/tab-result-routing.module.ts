import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabResultPage } from './tab-result.page';

const routes: Routes = [
  {
    path: '',
    component: TabResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabResultPageRoutingModule {}
