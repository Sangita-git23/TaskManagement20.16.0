import { Component, Input } from '@angular/core';
import { User } from '../user/user.component';
import { DummyTasks } from '../dummy_tasks';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { INewTaskData, Task } from './task.interface';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input() user!: User;
  taskArray = DummyTasks;
  isAddingTask: boolean = false;

  get tasks() {
    let task = this.taskArray.filter((t: Task) => t.userId == this.user.id)!;
    return task;
  }
  onCompleteTask(id: string) {
    console.log('id', id);
    this.taskArray = this.taskArray.filter((t) => t.id !== id);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onAddNewTask(task: any) {
    console.log('this.newTask', task);
    this.taskArray.push({
      id: new Date().getTime().toString(),
      userId: this.user.id,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
    this.isAddingTask = false;
  }
}
