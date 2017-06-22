import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { ToDoItem } from './to-do.type';
import 'rxjs/add/operator/map';

@Injectable()
export class ToDoService {

  constructor(private http: Http) { }

  items: ToDoItem[] = [];

  changes: BehaviorSubject<ToDoItem[]> = new BehaviorSubject(this.items);

  initialize() {
    this.http.get('http://localhost:3000/items')
      .map<any, ToDoItem[]>(res => res.json())
      .subscribe(toDoItems => {
        this.items = toDoItems;
        this.changes.next(this.items);
      });
  }

  getChanges() {
    return this.changes;
  }

  addItem(item: ToDoItem) {
    this.items.push(item);
    this.changes.next(this.items);
  }
}
