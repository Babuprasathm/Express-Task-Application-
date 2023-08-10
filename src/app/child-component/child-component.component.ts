import { Component , Output, EventEmitter} from '@angular/core';  

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  name: string = '';
  Course: string = '';
  city: string = '';

  @Output() Data: EventEmitter<any> = new EventEmitter<any>();

  input() {
    const data = {
      name: this.name,
      Course: this.Course,
      city: this.city
    };
    
    this.Data.emit(data);
  }
}

