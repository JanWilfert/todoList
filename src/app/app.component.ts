import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todoList';
}
