import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { JokeComponent } from './joke/joke.components';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent, LoginFormComponent, ProductListComponent, JokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
}
