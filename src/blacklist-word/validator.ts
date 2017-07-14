import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const blacklistWords = (words: string[]): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {

    if (!words.length) return null;
    if (!isPresent(blacklistWords)) return null;
    if (isPresent(Validators.required(control))) return null;

    console.log(words);

    //let v: number = +control.value;
    //return v > +blacklistWords ? null : {gt: true};

    return null;
  };
};
