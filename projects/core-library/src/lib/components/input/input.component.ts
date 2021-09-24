import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() type: String="text"
  label: String=""  
  placeholder: String=""  
  formName: String=""
}
