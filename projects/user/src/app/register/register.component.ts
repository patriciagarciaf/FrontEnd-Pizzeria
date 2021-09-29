import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  //TODO: comprobar email
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  
  user: User ={
    name: '',
    lastName: '',
    email: '',
    password: ''
  }

  onSubmit() {
    this.user.name = this.userForm.get('firstName')?.value;
    this.user.lastName = this.userForm.get('lastName')?.value;
    this.user.email = this.userForm.get('email')?.value;
    this.user.password = this.userForm.get('password')?.value;
    const observer = this.userService.createUser(this.user);
    const unsuscribe = observer.subscribe((data) => {
      //TODO: IndexedDB
      this.router.navigate(["login"]);
    });
  }

}
