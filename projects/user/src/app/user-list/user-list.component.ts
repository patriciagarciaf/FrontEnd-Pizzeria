import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { spinner } from '../authorize/authorize';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users?: User[]
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  @spinner()
  private getUsers(){
    this.userService.findAllUser().subscribe(userData => {this.users = userData});
  }
}
