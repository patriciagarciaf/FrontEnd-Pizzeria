import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-cap-img',
  templateUrl: './cap-img.component.html',
  styleUrls: ['./cap-img.component.css']
})
export class CapImgComponent implements OnInit {

  @Input() src: String ='';
  constructor() { }

  ngOnInit(): void {
  }

}
