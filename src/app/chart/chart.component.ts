import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../Service/todo-service.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent  implements OnInit{
  
  todo: any[] = [];
  title: string = 'Task Status';
  public legend: object = { visible: true, position:'Bottom', };
  public chartlabel: object = { visible:true, position:'Inside', name:'text'};
  public tooltip: object = {enable:true,format:'${point.x}: <b>${point.y}% </b>}'};
  
  chartData: any[] = [
    { status: 'Completed', value: 30, text:'30%' },
    { status: 'In Progress', value: 20, text:'20%' },
    { status: 'Todo', value: 50, text:'50%' },
  ];


  animation: object = { enable: true, duration: 800 };

  constructor(private todoService: TodoServiceService  ) {}

  ngOnInit(): void {

     

  }
}
