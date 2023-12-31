import { Component, Input, signal, SimpleChanges, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = 'hello';
  counter: WritableSignal<number> = signal(0);
  counterRef: number | undefined = 0;

  constructor() {
    // NO ASYNC
    // Before Render
    // Una vez
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // Before and during render
    console.log('NgOnChange');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }


  }

  ngOnInit() {
    // after Render
    // Una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() => {
      console.log("run interval");
      this.counter.update(stateprev => stateprev + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // hijos ya fueron pintados
    console.log("ngAfterViewInitt")
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log("ngOnDestroy")
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('change duration');
  }

}
