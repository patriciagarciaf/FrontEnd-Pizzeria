import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { UserInterface } from '../user';
import { CheckboxComponent } from 'projects/core-library/src/lib/formcontrols/checkbox/checkbox.component';

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

  onSubmit() {
    const user = this.userForm.value;
    const observer = this.userService.createUser(user);
    const unsuscribe = observer.subscribe((data) => {
      //TODO: IndexedDB
      this.router.navigate(["login"]);
    });
  }

}
