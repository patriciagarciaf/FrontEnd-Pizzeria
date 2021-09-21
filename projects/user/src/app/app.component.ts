import { Component,Input,Output,EventEmitter } from '@angular/core';
import { User } from './user';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'user';
}
