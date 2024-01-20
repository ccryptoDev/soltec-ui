import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  toggleCollapse = new EventEmitter<void>();
}
