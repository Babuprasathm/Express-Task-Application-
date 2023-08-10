import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoServiceService } from '../Service/todo-service.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent {
  todoForm: FormGroup;
  editMode: boolean = false;
  employeeToEdit: any;

  constructor(
    private dialogRef: MatDialogRef<EditTodoComponent>,
    private formBuilder: FormBuilder,
    private todoService: TodoServiceService,
) 
    {
    this.todoForm = this.formBuilder.group({
      // Initialize form controls here and pre-fill with employeeToEdit data
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: [null, Validators.required], // Use the appropriate type here

      // Other form controls...
    });



    if (this.editMode) {
      this.todoForm.patchValue({
        title: this.employeeToEdit.title,
        description: this.employeeToEdit.description,
        date: this.employeeToEdit.date,

        // Patch values for other form controls...
      });
    }
  }

  onSubmit(): void {
    if (this.todoForm.valid) {
      const updatedEmployee = {
        ...this.employeeToEdit,
        ...this.todoForm.value
      };

      // Update logic using your service


      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}