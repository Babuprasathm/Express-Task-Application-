import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoInterface } from '../Interface/todo-interface';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  todoForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditEmployeeComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public todoItem: TodoInterface
  ) {
    this.todoForm = this.formBuilder.group({
      title: [this.todoItem.title, Validators.required],
      description: [this.todoItem.description, Validators.required],
      status: [this.todoItem.status, Validators.required],
      date: [this.todoItem.date, Validators.required],
      priority: [this.todoItem.priority, Validators.required],
      complete_percentage: [this.todoItem.complete_percentage, Validators.required],
      assignedEmployee: this.formBuilder.group({
        id: [this.todoItem.assignedEmployee.id],
        name: [this.todoItem.assignedEmployee.name, Validators.required],
        image: [this.todoItem.assignedEmployee.image]
      })
    });
  }

  onSubmit(): void {
    if (this.todoForm.valid) {
      const updatedTodo: TodoInterface = {
        ...this.todoItem,
        ...this.todoForm.value
      };
      this.dialogRef.close(updatedTodo);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
