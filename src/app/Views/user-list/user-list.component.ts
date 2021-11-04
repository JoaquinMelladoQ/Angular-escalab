import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usuarios: Array<any> = [];
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this._userService.getAllUser().subscribe((users) => {
      this.usuarios = users
    });
  }

  userDetail(userId: string) {
    this.router.navigate(["detail/" + userId])
  }

}
