import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from "@angular/router";

import { UserService } from '../../services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
})

export class UserComponent {
  userList: UserData[];

  constructor(public http: Http, private _router: Router, private _userService: UserService) {
    this.getUserList();
  }

  getUserList() {
    this._userService.getUserList().subscribe(data => this.userList = data);
  }

  delete(Id) {
    const ans = confirm("Do you want to delete this room?");
    if (ans) {
      this._userService.deleteUser(Id).subscribe((data) => {
        this.getUserList();
      },
        error => console.error(error));
      ;
    }
  }
}

interface UserData {
  Id: number;
  userId: string;
  name: string;
  Email: string;
}
