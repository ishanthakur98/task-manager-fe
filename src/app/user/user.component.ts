import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

type User = {
  id: string,
  name: string,
  avatar: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgClass,CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user!: User;
// @Input({required: true}) id!: string;
//  @Input({required: true}) avatar!: string;
//  @Input({required: true}) name!: string;
 @Output() select = new EventEmitter();
@Input({required:true}) selected!: boolean; 

// avatar = input<string>();
// name = input.required<string>();

// imagePath = computed(() => {
//   return "../assets/users/users/" + this.avatar();
// })

 get avatarImg(){
  return "../assets/users/users/" + this.user.avatar;
 }

 onSelectUser(){
  this.select.emit(this.user.id);
 }
}
