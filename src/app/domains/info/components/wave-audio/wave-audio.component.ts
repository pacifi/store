import { Component, ElementRef, Input, signal, ViewChild, WritableSignal } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.scss'
})
export class WaveAudioComponent {

  @Input({required: true}) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;
  private ws!: WaveSurfer;
  isPlaying: WritableSignal<boolean> = signal(false);

  ngAfterViewInit() {
    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    });
    this.ws.on('play', () => {
      this.isPlaying.set(true);
    });
    this.ws.on('pause', () => {
      this.isPlaying.set(true);
    });

  }

  plauPause() {
    this.ws.playPause();
  }


}
