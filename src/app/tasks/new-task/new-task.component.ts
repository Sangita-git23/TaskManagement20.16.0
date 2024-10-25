import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewTaskData } from '../task.interface';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter();
  @Output() add = new EventEmitter<INewTaskData>();

  newTask: INewTaskData = {
    title: '',
    summary: '',
    dueDate: '',
  };
  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.add.emit(this.newTask);
  }
}
