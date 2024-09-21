import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import {DUMMY_USERS} from './dummy-user';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,UserComponent,CommonModule,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';

  users = DUMMY_USERS;

  id : string = "";
  name! :string;

  onSelectUser(id: string){
    this.id = id;
    for(let user of this.users){
      if(user.id === id){
        this.name=user.name;
        break;
      }
    }
  }
}
