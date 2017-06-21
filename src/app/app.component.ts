import { Component, ViewEncapsulation } from '@angular/core';
import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent  {
  title = 'To Do';

  constructor(private todoService: ToDoService) { }

  thingsCompleted = []

  onNewItem(thingToDo: string) {
    this.todoService.addItem(thingToDo);
  }

  summary() {
    return `Summary: ${this.thingsCompleted.length} Done / ${this.todoService.items.length} Total`;
  }
}
