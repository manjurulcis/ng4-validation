import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const blacklistWords = (words: string[]): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {

    if (!words.length) return null;
    if (!isPresent(blacklistWords)) return null;
    if (isPresent(Validators.required(control))) return null;

    console.log(words);

    let v = control.value.split(" ");
    let validated = false, errorWord = "";

    // value not equal
    for(let i in v) {
      if(words.indexOf( v[i] ) > -1){
        validated = true;
        errorWord = i;
        break;
      }
    }
    if(!validated) return null;

    return {
      blacklistWords: true
    };
  };
};
