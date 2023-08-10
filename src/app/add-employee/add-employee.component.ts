import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoServiceService } from '../Service/todo-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  todoForm: FormGroup;
  lastGeneratedId: number = 0;

  constructor(
    private dialogRef: MatDialogRef<AddEmployeeComponent>,
    private formBuilder: FormBuilder,
    private todoService: TodoServiceService
  ) {
    this.lastGeneratedId = this.todoService.generateNewId();
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['inprogress', Validators.required],
      date: ['', Validators.required],
      priority: ['Low', Validators.required],
      complete_percentage: ['', Validators.required],
      assignedEmployee: this.formBuilder.group({
      
        name: ['', Validators.required],
        image: ['']
      })
    });
  }
  

  onSubmit(): void {
    if (this.todoForm.valid) {
      const newTodo = this.todoForm.value;
      newTodo.id = this.todoService.generateNewId();
      this.todoService.addTodoEmployee(newTodo);
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
