import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ArtsLibComponent } from './arts-lib.component';

@NgModule({
  declarations: [
    ArtsLibComponent
  ],
  exports: [
    ArtsLibComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ArtsLibModule { }
