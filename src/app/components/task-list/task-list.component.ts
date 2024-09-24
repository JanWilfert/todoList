import { Component } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskItemComponent, MaterialModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTaskDescription: string = ''; 
  filter: 'all' | 'completed' | 'active' = 'all';

  addTask() {
    if (this.newTaskDescription.trim() !== '') {
      this.tasks.push({
        id: Date.now(),
        description: this.newTaskDescription,
        completed: false
      });
      this.newTaskDescription = '';
    }
  }

  get filteredTasks() {
    if (this.filter === 'all') {
      return this.tasks;
    } else if (this.filter === 'completed') {
      return this.tasks.filter(task => task.completed);   

    } else {
      return this.tasks.filter(task => !task.completed);
    }
  }
}