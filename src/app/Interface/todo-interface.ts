export interface TodoInterface {


    id: number;
    title: string;
    description: string;
    status: 'todo' | 'inprogress' | 'completed'|'NotStarted';
    date: Date;
    priority: 'High'|'Medium'|'Low';
    complete_percentage:number;
    assignedEmployee: Employee;
 
}
export interface Employee {
    id: number;
    name: string;
    image: string;
  }
  export interface TodoInterfaceEmployee {


    id: number;
    title: string;
    description: string;
    status: 'todo' | 'inprogress' | 'completed'|'NotStarted';
    date: Date;
    priority: 'High'|'Medium'|'Low';
    complete_percentage:number;

 
}