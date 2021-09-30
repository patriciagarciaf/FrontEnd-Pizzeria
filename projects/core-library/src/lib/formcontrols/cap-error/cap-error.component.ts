import { getError } from './error';
import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'lib-cap-error',
  templateUrl: './cap-error.component.html',
  styleUrls: ['./cap-error.component.css']
})
export class CapErrorComponent{
  @Input() errors: ValidationErrors| null=null;
  get error(){
    return this.errors && getError(Object.keys(this.errors)[0]);
  }
}