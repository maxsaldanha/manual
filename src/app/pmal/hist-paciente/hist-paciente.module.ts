import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistPacientePageRoutingModule } from './hist-paciente-routing.module';

import { HistPacientePage } from './hist-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistPacientePageRoutingModule
  ],
  declarations: [HistPacientePage]
})
export class HistPacientePageModule {}
