import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: any;
  userData: any;

  constructor(
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userId = this._activatedRoute.snapshot.paramMap.get("id")
    this.getUser(this.userId)
  };

  getUser(userId: any) {
    this._userService.getUser(userId).subscribe((data) => {
      this.userData = data;
    });
  };

};
