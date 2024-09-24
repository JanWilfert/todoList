import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-item',   

  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task!: Task;

  isEditing: boolean = false;
  editedDescription: string = '';

  onToggleCompleted() {
    this.task.completed = !this.task.completed;
  }

  onStartEdit() {
    this.isEditing = true;
    this.editedDescription = this.task.description;
  }

  onSaveEdit() {
    if (this.editedDescription.trim() !== '') {
      this.task.description = this.editedDescription;
      this.isEditing = false;
    }
  }

  onCancelEdit() {
    this.isEditing = false;
  }
}