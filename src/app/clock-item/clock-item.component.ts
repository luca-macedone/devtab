import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-clock-item',
  templateUrl: './clock-item.component.html',
  styleUrl: './clock-item.component.scss'
})
export class ClockItemComponent implements OnInit, OnDestroy {
  time: Date = new Date();
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.fetchTime()
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe()
  }

  fetchTime() {
    let observable = interval(1000)
    this.subscription = observable.subscribe(() => {
      this.time = new Date()
    })
  }
}
