import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QtdExamTecPageRoutingModule } from './qtd-exam-tec-routing.module';

import { QtdExamTecPage } from './qtd-exam-tec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QtdExamTecPageRoutingModule
  ],
  declarations: [QtdExamTecPage]
})
export class QtdExamTecPageModule {}
