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

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService, private router: Router) { }

  userLogin: UserLoginService={
    email: '',
    password: ''
  }

  onSubmit(){
    const user = this.userForm.value;
    if(this.userForm.valid){
      const observer = this.userService.getUserById(user);
      const unsuscribe = observer.subscribe((data) => {
        //TODO: IndexedDB
        this.router.navigate(["login"]);
      })
    }
  }

}
