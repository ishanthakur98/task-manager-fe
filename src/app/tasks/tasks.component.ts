import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { task } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, NgIf, CreateTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  constructor(private tasksService: TasksService) { }

  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  addTask = false;


  get selectedUserTasks() {
    return this.tasksService.selectedUserTasks(this.id);
  }

  taskCompleted(id: string) {
    this.tasksService.taskCompleted(id);
  }

  createTask() {
    this.addTask = true;
  }

  isTaskCanceled(val: boolean) {
    this.addTask = false;
  }

  addNewTask(newTask: task) {
    newTask.userId = this.id;
    this.tasksService.addNewTask(newTask, this.id);
  }
}
