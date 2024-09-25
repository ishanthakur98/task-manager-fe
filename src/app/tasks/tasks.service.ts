import { Injectable } from '@angular/core';
import { task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { 
    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }

  private tasks = [
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

  selectedUserTasks(id:string){
    return this.tasks.filter((task) => task.userId===id);
  }

  taskCompleted(id:string){
    this.tasks = this.tasks.filter(task => task.id != id);
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }



  addNewTask(newTask:task,id:string){
    newTask.userId=id;
    this.tasks.push(newTask);
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }

}
