import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { UserComponent, User } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { NgFor } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent, UserComponent, NgFor, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  users = DUMMY_USERS;
  selectedUser!: User;

  ngOnInit() {
    this.selectedUser = this.users[0];
  }
  onSelectUser(event: User) {
    this.selectedUser = event;
  }
}
