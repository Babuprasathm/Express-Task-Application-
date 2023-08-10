import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { TodoInterface } from '../Interface/todo-interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoServiceService } from '../Service/todo-service.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  selectedPriority: 'High' | 'Medium' | 'Low' = 'High';
  selectedStatus: 'todo' | 'inprogress' | 'completed' = 'todo';
  taskForm! : FormGroup;

    task: TodoInterface = {
      title: '',
      description: '',
      status:'todo',
      priority: 'High',
      date: new Date(),
      id: 0,
      complete_percentage:0,
      assignedEmployee: {
        id: 1,
        name: '',
        image: ''
      }
      
    };
  this: any;
  AddTodo: TodoInterface = { id: 0,title: '', description: '', status: 'todo',date:new Date() ,priority:'High',complete_percentage:0,assignedEmployee: {
    id: 1,
    name: '',
    image: ''
  } };
  showErrorMessage: boolean = false;
 
  
    constructor(private dialog: MatDialog,
      public dialogRef: MatDialogRef<AddTodoComponent>,
      private formBuilder: FormBuilder,
      private snackBar: MatSnackBar,
      private todoService: TodoServiceService
      ) {}
  
      openDialog(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '400px';
        dialogConfig.position = { top: '50%', left: '50%'};
        dialogConfig.panelClass = 'custom-dialog-container';
    
        this.dialog.open(AddTodoComponent, dialogConfig);
      }
      ngOnInit(){
          this.initializeForm();
          
      }
      initializeForm() {
  
        this.taskForm = this.formBuilder.group({
          title: ['', Validators.required], 
          description: [''], 
      priority: ['', Validators.required], 
          date: [null,Validators.required] 
        });
     }

     addTask() {
      if (this.taskForm.invalid)  {
        // this.snackBar.open('Please fill in all required fields.', 'Close', {
        //   duration: 1000
        // });
        this.showErrorMessage = true;
        return;
      }
  
      const newTodo: TodoInterface = {
        id: this.todoService.generateNewId(), 
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        status: this.selectedStatus,
        priority: this.selectedPriority,
        date: this.taskForm.value.date, 
        complete_percentage: 0,
        assignedEmployee: {
          id: 1,
          name: '',
          image: ''
        }
      };
      console.log(newTodo);
  
      this.todoService.addTodoEmployee(newTodo);
      this.dialogRef.close(newTodo);
    }
  
    onCancelClick() {
      this.dialogRef.close();
    }
    // addTodo(): void {
    //   if (this.AddTodo.title.trim()) {
    //     this.todoService.addTodo({
    //       ...this.AddTodo,
    //       id: this.todo.length + 1
    //     });
     
    //   }
    // }
    
  

}
