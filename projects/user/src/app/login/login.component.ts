import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IndexeddbService } from 'projects/core-library/src/lib/services/indexeddb.service';
import { UserService } from '../service/user.service';

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

  constructor(private userService: UserService, private router: Router, private indexeddbService: IndexeddbService) { }

  onSubmit(){
    const user = this.userForm.value;
    if(this.userForm.valid){
      const observer = this.userService.login(user);
      const unsuscribe = observer.subscribe((data) => {
        this.indexeddbService.removeUser();
        this.indexeddbService.addUser(data);
        this.router.navigate(["user/register"]);
      })
    }
  }

}
