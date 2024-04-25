import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tracker-draw',
  templateUrl: './tracker-draw.component.html',
  styleUrls: ['./tracker-draw.component.scss']
})
export class TrackerDrawComponent implements AfterViewInit {
  @ViewChild('myCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (ctx) {
      // Draw a red rectangle
      ctx.fillStyle = 'red';
      ctx.fillRect(50, 50, 100, 75);

      // Draw a blue rectangle
      ctx.fillStyle = 'blue';
      ctx.fillRect(200, 100, 150, 100);
    }
  }
}