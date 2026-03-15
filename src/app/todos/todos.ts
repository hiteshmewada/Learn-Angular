import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrls: ['./todos.scss'],
})
export class Todos {
  todos: { title:string, completed: boolean }[] = [
    { title: 'Learn Angular', completed: false },
  ];

  addTodo(title: string, todoTitle: HTMLInputElement): void {
    this.todos.push({ title, completed: false });
    todoTitle.value = '';
  }
  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}
