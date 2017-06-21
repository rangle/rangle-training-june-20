import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ToDoService {

  constructor() { }


  items: string[] = [
    'Learn Angular',
    'Learn Redux',
    'Walk around Chicago',
  ];

  changes: BehaviorSubject<string[]> = new BehaviorSubject(this.items);

  getChanges() {
    return this.changes;
  }

  addItem(item) {
    this.items.push(item);
    this.changes.next(this.items);
  }
}
