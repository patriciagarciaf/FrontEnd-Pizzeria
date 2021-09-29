import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent{

  @Input() text: string ='';
  @Input() disabled = false;

  isChecked = false;

  writeValue(obj: boolean): void {
    this.isChecked = obj;
  }

}
