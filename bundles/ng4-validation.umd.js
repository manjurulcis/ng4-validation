(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.validation = global.ng.validation || {}),global.ng.core,global.ng.forms));
}(this, (function (exports,_angular_core,_angular_forms) { 'use strict';

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}

var BLACKLIST_WORD_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return BlacklistWordValidator$$1; }),
    multi: true
};
var BlacklistWordValidator$$1 = (function () {
    function BlacklistWordValidator$$1() {
    }
    BlacklistWordValidator$$1.prototype.ngOnInit = function () {
        this.validator = blacklistWords(this.words);
    };
    BlacklistWordValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'blacklistWords') {
                this.validator = blacklistWords(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    BlacklistWordValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    BlacklistWordValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    __decorate([
        _angular_core.Input(),
        __metadata("design:type", Array)
    ], BlacklistWordValidator$$1.prototype, "words", void 0);
    BlacklistWordValidator$$1 = __decorate([
        _angular_core.Directive({
            selector: '[blacklistWords][formControlName],[blacklistWords][formControl],[blacklistWords][ngModel]',
            providers: [BLACKLIST_WORD_VALIDATOR]
        })
    ], BlacklistWordValidator$$1);
    return BlacklistWordValidator$$1;
}());

function isPresent(obj) {
    return obj !== undefined && obj !== null;
}

var blacklistWords = function (words) {
    return function (control) {
        if (!words.length)
            return null;
        if (!isPresent(blacklistWords))
            return null;
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var v = control.value.split(" ");
        var validated = false, errorWord = "";
        // value not equal
        for (var i in v) {
            if (words.indexOf(v[i]) > -1) {
                validated = true;
                errorWord = i;
                break;
            }
        }
        if (!validated)
            return null;
        return {
            blacklistWords: true
        };
    };
};

var CustomValidators = {
    blacklistWords: blacklistWords
};
var CUSTOM_FORM_DIRECTIVES = [
    BlacklistWordValidator$$1
];
var CustomValidationModule = (function () {
    function CustomValidationModule() {
    }
    CustomValidationModule = __decorate([
        _angular_core.NgModule({
            declarations: [CUSTOM_FORM_DIRECTIVES],
            exports: [CUSTOM_FORM_DIRECTIVES]
        })
    ], CustomValidationModule);
    return CustomValidationModule;
}());

exports.CustomValidators = CustomValidators;
exports.CustomValidationModule = CustomValidationModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng4-validation.umd.js.map
