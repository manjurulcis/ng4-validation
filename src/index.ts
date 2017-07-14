import { NgModule } from '@angular/core';

import { gt, GreaterThanValidator } from './greater-than';
import { range, RangeValidator } from './range';

export const CustomValidators: any = {
  gt,
  range
};

const CUSTOM_FORM_DIRECTIVES = [
  GreaterThanValidator,
  RangeValidator
];

@NgModule({
  declarations: [CUSTOM_FORM_DIRECTIVES],
  exports: [CUSTOM_FORM_DIRECTIVES]
})
export class CustomFormsModule {
}
