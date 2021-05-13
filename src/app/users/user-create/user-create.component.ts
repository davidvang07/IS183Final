import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {

  user: Object = {};

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {

  }

  async createUser(user: Object) {
    const resp = await this.userService.addUser(user);
    if (resp) {
      this.router.navigate(['/users']);
    }
  }

}
