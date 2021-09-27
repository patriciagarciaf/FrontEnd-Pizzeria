import { Component, Input} from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{

  @Input() type: String="submit"
  //input hacia
}
