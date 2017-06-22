import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css']
})
export class GenericInputComponent implements OnInit {
  thingsToDo = []

  constructor() { }

  ngOnInit() {
  }

  @Output() newItem: EventEmitter<string> = new EventEmitter()

  addToDo(newItemElement: HTMLInputElement) {
    this.newItem.emit(newItemElement.value);
    newItemElement.value = '';
  }
}
