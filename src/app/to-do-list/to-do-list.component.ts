import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Input() thingsToDo = []

  constructor() { }

  ngOnInit() {
  }

  addToDo(toDoItem: string) {
    this.thingsToDo.push(toDoItem);
  }

}
