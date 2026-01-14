import { Component ,EventEmitter,Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  @Output() close = new EventEmitter<void>();
  @Output() create = new EventEmitter<NewTaskData>();

  onCancelNewTask() {
    this.close.emit();
  }
  onSubmit() {
    this.create.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    });
    }
}
