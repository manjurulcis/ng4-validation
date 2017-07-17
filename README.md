# ng4-validation
A small validator package for Angular 2 to validate text field value against a list blacklist words

# Template Driven Uses 
Import the module in app.module.ts <br/><br/>
<code>
import { CustomFormsModule } from 'ng4-validation';
</code>
<br/><br/>
This validator need an input which is an array of words named "words". See below how to use 

<code><br/><br/>Add this in your package.json "ng4-validation":"^version" 
<br/><br/>import { BlacklistWordValidator } from "ng2-blacklistword-validator"
<br/><br/><input  type = "text" name = "firstName" [(ngModel)] = "person.firstName"
        words = "blacklistedWords" blacklistWords required><br/><br/>
        <p *ngIf="demoForm.from.controls.field.errors?.blacklistWords">error message</p>
</code>  
             
             
# Model Driven Uses 
Import the <code>ReactiveFormsModule</code> module in app.module.ts <br/><br/>
<code>
import { NgModule } from '@angular/core';<br/>
import { BrowserModule } from '@angular/platform-browser';<br/>
import { ReactiveFormsModule } from '@angular/forms';<br/>
import { AppComponent } from './app.component';<br/>
@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})<br/>
export class AppModule {
}
</code>

<br/><br/>

import <code>CustomValidators</code> in app.component.ts or in the app you need to implement<br/>
<code>
import { Component } from '@angular/core';<br/>
import { FormGroup, FormControl } from '@angular/forms';<br/>
import { CustomValidators } from 'ng2-validation';<br/>
@Component({
    selector: 'app',
    template: require('./app.html')
});<br/>export class AppComponent {
    form: FormGroup;<br/>
    words: any[] = ['this', 'that'];<br/>
    constructor() {
        this.form = new FormGroup({
            field: new FormControl('', CustomValidators.blacklistWords(words))
        });
    }<br/>
}<br/>
<input type="text" formControlName="field"/><br/><p *ngIf="demoForm.from.controls.field.errors?.blacklistWords">error message</p>
</code>
                    
#Issues
If you see any issues please create an issue on github