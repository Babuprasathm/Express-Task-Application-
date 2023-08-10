import { Injectable } from '@angular/core';
import { TodoInterface, TodoInterfaceEmployee } from '../Interface/todo-interface';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todoemployee:TodoInterfaceEmployee[]=[

    {
      id: 1,
      title: 'Work with HTML',
      description: 'Module',
      status: 'inprogress',
      date: new Date('2023-08-03'),
      priority: 'High',
      complete_percentage:30,
    },
    {
      id: 2,
      title: 'Work with css',
      description: 'Module',
      status: 'completed',
      date: new Date('2023-08-03'),
      priority: 'High',
      complete_percentage:30,
    },
    {
      id: 3,
      title: 'Work with Javascript',
      description: 'Module',
      status: 'completed',
      date: new Date('2023-08-03'),
      priority: 'High',
      complete_percentage:30,
    },
    {
      id: 4,
      title: 'Work with Javascript',
      description: 'Module',
      status: 'inprogress',
      date: new Date('2023-08-03'),
      priority: 'High',
      complete_percentage:30,
    },
    {
      id: 5,
      title: 'Work with jquery',
      description: 'Module',
      status: 'completed',
      date: new Date('2023-08-03'),
      priority: 'High',
      complete_percentage:30,
    },
    {
      id: 6,
      title: 'Work with .Net',
      description: 'Module',
      status: 'inprogress',
      date: new Date('2023-08-03'),
      priority: 'High',
      complete_percentage:30,
    },  {
      id: 7,
      title: 'Work with SQL',
      description: 'Module',
      status: 'completed',
      date: new Date('2023-08-03'),
      priority: 'High',
      complete_percentage:30,
    },


  ]
 
  todoList : TodoInterface[] = [
    {
      id: 1,
      title: 'Fortigo',
      description: 'Module',
      status: 'inprogress',
      date: new Date('2023-08-03'),
      priority: 'High',
      complete_percentage:30,
      assignedEmployee: {
        id: 1,
        name: 'Sai kalpana',
        image: ''
      }
    },
    {
      id: 2,
      title: 'Apple Expresss',
      description: 'Trip sheet and inventory module ',
      status: 'completed',
      date: new Date('2023-08-04'),
      priority: 'Low',
      complete_percentage:80,
      assignedEmployee: {
        id: 1,
        name: 'BabuPrasath',
        image: ''
      }
    },
    {
      id: 3,
      title: 'A&B',
      description: 'Monaris',
      status: 'NotStarted',
      date: new Date('2023-08-05'),
	  priority: 'Medium',
    complete_percentage:100,
    assignedEmployee: {
      id: 1,
      name: 'Sulaiman',
      image: ''
    }
    },
  ];


  
  lastId: number = this.todoList.length > 0 ? this.todoList[this.todoList.length - 1].id : 0;

  getAll() {
    return this.todoList;
  }
  getAllEmployee() {
    return this.todoemployee;
  }
  generateNewId(): number {
    this.lastId++;
    return this.lastId;
  }
  addTodoEmployee(todoemployee:TodoInterface): void { 
    this.todoemployee.push(todoemployee);
  }
  // addTodo(todo: TodoInterface): void { 
  //   this.todoList.push(todo);
  // }
  getChargeSheetBystatuscompleted() : TodoInterface[] {
    return this.todoList.filter((task) => task.status === 'completed')
  }
  getChargeSheetBystatuscompletedEmployees() : TodoInterfaceEmployee[] {
    return this.todoemployee.filter((task) => task.status === 'completed')
  }
  getChargeSheetBystatusInProgressEmployees() : TodoInterfaceEmployee[] {
    return this.todoemployee.filter((task) => task.status === 'inprogress');
  }
 
  updateTodoStatus(id: number, completed: boolean): void {
    const todo = this.todoList.find(item => item.id === id);
    if (todo) {
      todo.status = 'completed';
    }
  }
  updateTodo(updatedEmployee: any): void {
    const index = this.todoemployee.findIndex(todo => todo.id === updatedEmployee.id);

    if (index !== -1) {
      this.todoemployee[index] = updatedEmployee;
    }
  }
}

