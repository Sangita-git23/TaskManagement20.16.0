import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.interface';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent implements OnInit {
  @Input() currentUserTask!: Task;
  @Output() complete = new EventEmitter<string>();
  ngOnInit() {
    // console.log('this.selectedUser', this.currentUserTask);
  }
  onComplete() {
    this.complete.emit(this.currentUserTask.id);
  }
}
