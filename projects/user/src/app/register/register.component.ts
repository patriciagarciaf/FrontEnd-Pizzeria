import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private router: Router) { }


  onSubmit() {
    const user = this.userForm.value;
    if(this.userForm.valid){
      const observer = this.userService.createUser(user);
      const unsuscribe = observer.subscribe((data) => {
        //TODO: IndexedDB
        this.router.navigate(["login"]);
      })
    }
  }

}
