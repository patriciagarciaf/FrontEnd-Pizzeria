import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { UserLoginService } from '../service/userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private userService: UserService, private router: Router) { 
    
  }
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });
  userLogin: UserLoginService={
    email: '',
    password: ''
  }

  onSubmit(){}
}
