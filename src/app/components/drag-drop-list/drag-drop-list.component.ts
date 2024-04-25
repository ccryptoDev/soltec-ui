import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { InstanceTrackerDrawList, TrackerInformation } from 'src/app/models/instance.model';

@Component({
  selector: 'app-drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.scss'],
  standalone: true,
  imports:[CdkDropList, NgFor, CdkDrag]
})
export class DragDropListComponent implements OnInit {
  @Input() data?: InstanceTrackerDrawList;
  
  @Output() onDrop = new EventEmitter<any>()

  todo: TrackerInformation[] = [];

  done: TrackerInformation[] = [];

  ngOnInit(): void {
    this.done = this.data?.possible_trackers ?? [];
    this.todo = this.data?.trackers ?? []
  }  

  didDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.onDrop.emit({
        todo: this.todo, 
        done: this.done
      })
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      this.onDrop.emit({
        todo: this.todo, 
        done: this.done
      })
    }
  }
}
