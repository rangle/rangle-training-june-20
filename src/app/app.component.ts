import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do';

  thingsToDo = [
    'Learn Angular',
    'Learn Redux',
    'Go to Millenium Park',
  ]

  thingsCompleted = []

  ngOnInit() {

  }
  summary() {
    return 'Summary: ' + this.thingsCompleted.length / this.thingsToDo.length
  }
}
