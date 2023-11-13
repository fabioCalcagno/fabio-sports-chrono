import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChronoHeaderComponent } from './chrono-header/chrono-header.component';
import { ChronoNumberInputsComponent } from './chrono-number-inputs/chrono-number-inputs.component';

@NgModule({
  declarations: [ChronoHeaderComponent, ChronoNumberInputsComponent],
  imports: [IonicModule, CommonModule, FormsModule],
  exports: [ChronoHeaderComponent, ChronoNumberInputsComponent],
})
export class ComponentsModule {}
