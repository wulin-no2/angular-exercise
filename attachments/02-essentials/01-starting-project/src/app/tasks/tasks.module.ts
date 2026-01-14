import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from '@angular/common';

@NgModule({
  declarations:[TaskComponent, NewTaskComponent, TasksComponent, CardComponent],
  exports:[TasksComponent,],
  imports: [FormsModule, DatePipe]
})
export class TasksModule{}