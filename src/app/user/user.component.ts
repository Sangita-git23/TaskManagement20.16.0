import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
// import { DUMMY_USERS } from '../dummy-users';
// const randomIndx = Math.floor(Math.random() * DUMMY_USERS.length);
export interface User {
  id: string;
  name: string;
  avatar: string;
  imgpath?: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  // currentUser = input.required<User>(); signal approach
  @Input({ required: true }) currentUser!: User;
  @Input({ required: true }) is_selected!: boolean;
  @Output() select = new EventEmitter<User>();

  // currentUser = signal(DUMMY_USERS[randomIndx]);
  get imagePath() {
    let path = 'assets/users/' + this.currentUser.avatar;
    return path;
  }
  ngOnInit() {
    this.currentUser['imgpath'] = this.imagePath;
  }
  // imagePath = computed(() => 'assets/users/' + this.currebtUser().avatar);
  onSelectUser() {
    this.select.emit(this.currentUser);
  }
}
