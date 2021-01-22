import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuraExamePageRoutingModule } from './dura-exame-routing.module';

import { DuraExamePage } from './dura-exame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuraExamePageRoutingModule
  ],
  declarations: [DuraExamePage]
})
export class DuraExamePageModule {}
