import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../Service/todo-service.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Subscription, of } from 'rxjs';
import { TodoInterface, TodoInterfaceEmployee } from '../Interface/todo-interface';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTodoComponent } from '../add-todo/add-todo.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todo: any[] = [];
  inprogress: any[] = [];
  completed: any[] = [];
  todoSubscription: Subscription;
  inprogressSubscription: Subscription;
  completedSubscription: Subscription;
  SearchText:string='';
  todoSearchText: string = '';
  progressSearchText: string = '';
  completedSearchText: string = '';

  // todo: any []=[];
  // inprogress :any[]=[] ;
  // completed :any[]=[];



  todoStatus = ['todo', 'inprogress', 'completed'];

  constructor(private todoService: TodoServiceService,private dialog: MatDialog  ) {

    this.todoSubscription = of(this.todoService.getAllEmployee()).subscribe((todos: TodoInterfaceEmployee[]) => {
      this.todo = todos;
    });

    this.inprogressSubscription = of(this.todoService.getChargeSheetBystatusInProgressEmployees()).subscribe((inprogress: TodoInterfaceEmployee[]) => {
      this.inprogress = inprogress;
    });

    this.completedSubscription = of(this.todoService.getChargeSheetBystatuscompletedEmployees()).subscribe((completed: TodoInterfaceEmployee[]) => {
      this.completed = completed;
    });



  }

  ngOnInit() {
    this.todo = this.todoService.getAllEmployee();
    this.inprogress = this.todoService.getChargeSheetBystatusInProgressEmployees();
    this.completed = this.todoService.getChargeSheetBystatuscompletedEmployees();
  }

  Delete(index: number) {
    this.todo.splice(index, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    const previousIndex = event.previousIndex;
    const newIndex = event.currentIndex;
    if (event.previousContainer === event.container) {
      moveItemInArray(this.todo, previousIndex, newIndex);
    } else {
      transferArrayItem(

        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,

      );


    }
  }
  showaddTodo(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px'; 


    dialogConfig.position = { top: '100px', left: '40%' };

    const dialogRef = this.dialog.open(AddTodoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {

      if (result) {
        console.log('New Task:', result);

      }
    });
  }

  toggleTodoStatus(id: number, completed: boolean): void {
    this.todoService.updateTodoStatus(id, completed);
  }

  filterTodosBySearch(searchText: string, todos: any[]): any[] {
    if (!searchText) {
      return todos;
    }
    searchText = searchText.toLowerCase();
    return todos.filter(todo => todo.title.toLowerCase().includes(searchText));
  }

  Search(section: string) {
    if (section === 'todo') {
      this.todo = this.filterTodosBySearch(this.todoSearchText, this.todoService.getAllEmployee());
    } else if (section === 'inprogress') {
      this.inprogress = this.filterTodosBySearch(this.progressSearchText, this.todoService.getChargeSheetBystatusInProgressEmployees());
    } else if (section === 'completed') {
      this.completed = this.filterTodosBySearch(this.completedSearchText, this.todoService.getChargeSheetBystatuscompletedEmployees());
    }
  }
  // EditTodo(){


  //     const dialogConfig: MatDialogConfig = {
  //       width: '400px',
  //       data: { editMode: true, employee: employee }
  //     };
  
  //     this.dialog.open(EditTodoComponent, dialogConfig);
  //   }

  }


  


