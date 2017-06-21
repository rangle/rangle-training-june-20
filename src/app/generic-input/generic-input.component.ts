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
    console.log('genericinput on init');
  }

  ngDoCheck() {
    console.log('genericinput do check');
  }

  ngAfterContentInit() {
    console.log('genericinput after content init');
  }

  ngAfterViewInit() {
    console.log('genericinput after view init');
  }

  ngOnDestroy() {
    console.log('genericinput destroyed')
  }

  @Output() newItem: EventEmitter<string> = new EventEmitter()

  addToDo(newItemElement: HTMLInputElement) {
    this.newItem.emit(newItemElement.value);
    newItemElement.value = '';
  }
}
