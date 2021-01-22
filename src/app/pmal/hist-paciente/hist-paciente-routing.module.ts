import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistPacientePage } from './hist-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: HistPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistPacientePageRoutingModule {}
