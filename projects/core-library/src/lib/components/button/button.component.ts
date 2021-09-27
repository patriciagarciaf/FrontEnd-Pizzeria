<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, Input} from '@angular/core';
>>>>>>> main

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
<<<<<<< HEAD
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
export class ButtonComponent{

  @Input() type: String="submit"
  //input hacia
>>>>>>> main
}
