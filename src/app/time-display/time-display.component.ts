import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit, OnDestroy {
  
  currentTime: Date = new Date();
  private timeSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.timeSubscription = interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
  }

  ngOnDestroy(): void {
    this.timeSubscription.unsubscribe();
  }
}
