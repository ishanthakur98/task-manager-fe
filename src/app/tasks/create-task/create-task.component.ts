import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { task } from '../task.model';



@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  id = 1;
  title!:string;
  summary!:string;
  dueDate!:string;

@Output() isCancled = new EventEmitter<boolean>();
@Output() newTask = new EventEmitter<task>();

  onCancel(){
    this.isCancled.emit(true);
  }
  onCreateTask(){
    let newTask:task = {
      id: "t"+this.id,
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
      userId:""
    }
    this.id++;
    this.newTask.emit(newTask);
    this.onCancel();
  }

}
