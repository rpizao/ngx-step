import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgxStepContentComponent } from './components/ngx-step-content.component';
import { NgxStepComponent } from './components/ngx-step.component';

@NgModule({
  declarations: [
      NgxStepContentComponent, NgxStepComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    NgxStepContentComponent, NgxStepComponent
  ]
})
export class NgxStepModule { }
