import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tracker-draw',
  templateUrl: './tracker-draw.component.html',
  styleUrls: ['./tracker-draw.component.scss']
})
export class TrackerDrawComponent {
  @ViewChild('myCanvas') canvas: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    // ctx.beginPath();
    // ctx.moveTo(50, 50);   // Move to the first point
    // ctx.lineTo(200, 50);  // Draw a line to the second point
    // ctx.lineTo(200, 150); // Draw a line to the third point
    // ctx.lineTo(50, 150);  // Draw a line to the fourth point
    // ctx.closePath();      // Close the path to complete the rectangle
    // ctx.stroke();         // Stroke the rectangle
  }
}
