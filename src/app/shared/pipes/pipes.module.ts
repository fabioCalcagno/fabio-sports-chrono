import { NgModule } from '@angular/core';
import { ObjectToArrayPipe } from './object-to-array/object-to-array.pipe';

@NgModule({
  declarations: [
    ObjectToArrayPipe
  ],
  exports: [
    ObjectToArrayPipe
  ]
})
export class PipesModule { }
