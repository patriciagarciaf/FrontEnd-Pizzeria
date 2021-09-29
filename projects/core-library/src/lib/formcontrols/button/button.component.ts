import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{

  @Input() type: String="submit";
  @Output() BtnClickEmt: EventEmitter<string> = new EventEmitter<string>();

  onBtnClick() {
    this.BtnClickEmt.emit();
  }
}
