import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeriExamePageRoutingModule } from './geri-exame-routing.module';

import { GeriExamePage } from './geri-exame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeriExamePageRoutingModule
  ],
  declarations: [GeriExamePage]
})
export class GeriExamePageModule {}
