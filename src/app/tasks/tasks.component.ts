import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { task } from './task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NgFor,NgIf,CreateTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) id! :string; 
  @Input({required:true}) name!: string;
  addTask = false;
  
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of angular 18',
      dueDate: '2025-12-12'
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of angular 18',
      dueDate: '2025-12-12'
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of angular 18',
      dueDate: '2025-12-12'
    }
  ]

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId===this.id);
  }

  taskCompleted(id:string){
    this.tasks = this.tasks.filter(task => task.id != id);
  }

  createTask(){
    this.addTask=true;
  }

  isTaskCanceled(val:boolean){
    this.addTask=false;
  }

  addNewTask(newTask:task){
    newTask.userId=this.id;
    this.tasks.push(newTask);
  }
}
