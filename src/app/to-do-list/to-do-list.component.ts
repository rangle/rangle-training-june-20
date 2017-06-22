import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDoItem } from '../to-do.type';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  thingsToDo: ToDoItem[]  = []

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.toDoService.initialize();

    this.toDoService.getChanges().subscribe((newItems) => {
      this.thingsToDo = newItems.slice();
    });
  }

}
