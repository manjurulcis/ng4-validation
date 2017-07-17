import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { blacklistWords } from './';

const BLACKLIST_WORD_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BlacklistWordValidator),
  multi: true
};

@Directive({
  selector: '[blacklistWords][formControlName],[blacklistWords][formControl],[blacklistWords][ngModel]',
  providers: [BLACKLIST_WORD_VALIDATOR]
})
export class BlacklistWordValidator implements Validator, OnInit, OnChanges {
  @Input() words: string[];

  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.validator = blacklistWords(this.words);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let key in changes) {
      if (key === 'blacklistWords') {
        this.validator = blacklistWords(changes[key].currentValue);
        if (this.onChange) this.onChange();
      }
    }
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}
