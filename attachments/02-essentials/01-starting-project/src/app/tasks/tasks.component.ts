import { NewTaskData } from './task/task.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;
  constructor(private tasksService: TasksService) {}
  tasks = this.tasksService.getTasks();

  onCompleteTask(id: string) {
    this.tasksService.removingTask(id);
  }
  get selectedUserTasks() {
    return this.tasksService.getSelectedUserTasks(this.userId);
  }

  onAddTask() {
    this.isAddingTask = true;
  }
  closeNewTask() {
    this.isAddingTask = false;
  }
  onCreateTask(taskData: NewTaskData) {
    this.tasksService.addNewTask(taskData, this.userId);
    this.isAddingTask = false;
  }
}
