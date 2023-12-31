import {Component, signal, WritableSignal} from '@angular/core';
import {CounterComponent} from "../../../shared/components/counter/counter.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CounterComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  duration: WritableSignal<number> = signal(1000);
  message: WritableSignal<string> = signal('Hola')

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMesssage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
