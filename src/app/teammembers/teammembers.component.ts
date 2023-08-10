import { Component } from '@angular/core';
import { TodoInterface } from '../Interface/todo-interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TodoServiceService } from '../Service/todo-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-teammembers',
  templateUrl: './teammembers.component.html',
  styleUrls: ['./teammembers.component.css']
})
export class TeammembersComponent {
  todoList: TodoInterface[] = [];

  constructor(private todoService: TodoServiceService,private dialog: MatDialog) {
    this.todoList = this.todoService.getAll();
  }
  
  Employee  = [
    {
      id: 1,
      title: 'Complete task',
      description: 'Module',
      status: 'inprogress',
      date: new Date('2023-08-03'),
      priority: 'High',
      complete_percentage: 30,
      assignedEmployee: {
        id: 1,
        name: 'BabuPrasath',
        image: ''
      }
    },

  ];
  onTaskDrop(event: CdkDragDrop<TodoInterface[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
    }
  }
  getStatusIndicatorClass(status: string): string {
    if (status === 'completed') {
      return 'status-completed';
    } else if (status === 'inprogress') {
      return 'status-inprogress';
    } else {
      return 'status-not-started';
    }
  }
  
  getPriorityFlagClass(priority: string): string {
    return `priority-${priority.toLowerCase()}`;
  }
  openAddTodoDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '700px'
    });
  }
  openEditTodoDialog(task: TodoInterface): void {
    const dialogRef = this.dialog.open(EditEmployeeComponent, {
      data: task 
    });

    dialogRef.afterClosed().subscribe(updatedTodo => {
      if (updatedTodo) {
       
        this.todoService.updateTodo(updatedTodo);
      }
    });
  }
}
