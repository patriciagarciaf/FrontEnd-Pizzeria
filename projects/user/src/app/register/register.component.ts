import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { spinner } from 'projects/core-library/src/lib/decorators/spinner.decorator';
import { IndexeddbService } from 'projects/core-library/src/lib/services/indexeddb.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private router: Router, private indexeddbService: IndexeddbService) { }

  // @spinner()
  onSubmit() {
    const user = this.userForm.value;
    if(this.userForm.valid){
      const observer = this.userService.createUser(user);
      const unsuscribe = observer.subscribe((data) => {
        this.indexeddbService.removeUser();
        this.indexeddbService.addUser(data);
        this.router.navigate(["login"]);
      })
    }
  }

}
