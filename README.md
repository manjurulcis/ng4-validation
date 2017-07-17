# ng4-validation
A small validator package for Angular 2 to validate text field value against a list blacklist words

# Template Driven Uses 
Import the module in app.module.ts 
```
import { CustomFormsModule } from 'ng4-validation';
```

This validator need an input which is an array of words named "words". See below how to use 


Add this in your package.json "ng4-validation":"^version" 
```
import { BlacklistWordValidator } from "ng2-blacklistword-validator";

<input  type = "text" name = "firstName" [(ngModel)] = "person.firstName"
        words = "blacklistedWords" blacklistWords required>
        <p *ngIf="demoForm.from.controls.field.errors?.blacklistWords">error message</p>
``` 
             
             
# Model Driven Uses 
Import the <code>ReactiveFormsModule</code> module in app.module.ts 
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
}) 

export class AppModule {}  
```


import <code>CustomValidators</code> in app.component.ts or in the app you need to implement 

```
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
 
@Component({
    selector: 'app',
    template: require('./app.html')
});
 

export class AppComponent {
    form: FormGroup;
    words: any[] = ['this', 'that'];
    constructor() {
        this.form = new FormGroup({
            field: new FormControl('', CustomValidators.blacklistWords(words))
        });
    }
} 

<input  type = "text" name = "firstName" [(ngModel)] = "person.firstName"
              words = "blacklistedWords" blacklistWords required>
     <p *ngIf="demoForm.from.controls.field.errors?.blacklistWords">error message</p>
```
                    
#Issues
If you see any issues please create an issue on github