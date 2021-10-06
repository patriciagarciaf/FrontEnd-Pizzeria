import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{

  @Input() buttonConfig:any;
  @Input() type: string='submit';
  @Output() BtnClickEmt: EventEmitter<string> = new EventEmitter<string>();

  onBtnClick() {
    this.BtnClickEmt.emit();
  }
  ngOnInit() {}
  constructor(){}
}
