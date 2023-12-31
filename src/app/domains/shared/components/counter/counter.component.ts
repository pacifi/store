import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = 'Hpla';

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
    console.log(changes)

  }

  ngOnInit() {
    // after Render
    // Una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
  }

}
