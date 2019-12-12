import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.users = this.usersService.getActiveUsers();
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
