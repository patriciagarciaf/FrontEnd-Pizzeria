import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { spinner } from '../authorize/authorize';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  private user: User = {}
  constructor(
    private userSerice: UserService,
    private router: Router) { }

  onSubmitForm() {
    this.commitUser();
  }

  @spinner()
  commitUser() {
    this.userSerice.createUser(this.user).subscribe(
      () => {
        this.redirectUserList();
      });
  }

  redirectUserList() {
    this.router.navigate(['/userlist']);
  }

}
