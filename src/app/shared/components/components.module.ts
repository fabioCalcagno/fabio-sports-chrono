import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChronoHeaderComponent } from './chrono-header/chrono-header.component';

@NgModule({
  declarations: [ChronoHeaderComponent],
  imports: [IonicModule, CommonModule, FormsModule],
  exports: [ChronoHeaderComponent],
})
export class ComponentsModule {}
