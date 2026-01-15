import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { DatePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations:[TaskComponent, NewTaskComponent, TasksComponent],
  exports:[TasksComponent,],
  imports: [FormsModule, DatePipe, SharedModule]
})
export class TasksModule{}