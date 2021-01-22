import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RastreaExamePageRoutingModule } from './rastrea-exame-routing.module';

import { RastreaExamePage } from './rastrea-exame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RastreaExamePageRoutingModule
  ],
  declarations: [RastreaExamePage]
})
export class RastreaExamePageModule {}
