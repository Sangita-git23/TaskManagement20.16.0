import { Injectable } from '@angular/core';
import { DummyTasks } from '../dummy_tasks';
@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = DummyTasks;
  completeTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
