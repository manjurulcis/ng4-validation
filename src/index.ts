import { NgModule } from '@angular/core';

import { blacklistWords, BlacklistWordValidator } from './blacklist-word';

export const CustomValidators: any = {
  blacklistWords
};

const CUSTOM_FORM_DIRECTIVES = [
  BlacklistWordValidator
];

@NgModule({
  declarations: [CUSTOM_FORM_DIRECTIVES],
  exports: [CUSTOM_FORM_DIRECTIVES]
})
export class CustomFormsModule {
}
