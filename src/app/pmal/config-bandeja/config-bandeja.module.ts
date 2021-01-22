import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigBandejaPageRoutingModule } from './config-bandeja-routing.module';

import { ConfigBandejaPage } from './config-bandeja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigBandejaPageRoutingModule
  ],
  declarations: [ConfigBandejaPage]
})
export class ConfigBandejaPageModule {}
