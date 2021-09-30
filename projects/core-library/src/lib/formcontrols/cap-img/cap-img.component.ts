import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-cap-img',
  templateUrl: './cap-img.component.html',
  styleUrls: ['./cap-img.component.css']
})
export class CapImgComponent{

  @Input() src: String ='';
  constructor() { }

  ngOnInit(): void {
  }

}
