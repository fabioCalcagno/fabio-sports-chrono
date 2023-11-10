import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationPageRoutingModule } from './configuration-routing.module';

import { ComponentsModule } from '@generalSharedComponents/components.module';
import { ConfigurationPage } from './configuration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ConfigurationPage],
})
export class ConfigurationPageModule {}
