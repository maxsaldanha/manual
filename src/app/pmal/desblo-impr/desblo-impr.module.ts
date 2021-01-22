import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesbloImprPageRoutingModule } from './desblo-impr-routing.module';

import { DesbloImprPage } from './desblo-impr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesbloImprPageRoutingModule
  ],
  declarations: [DesbloImprPage]
})
export class DesbloImprPageModule {}
