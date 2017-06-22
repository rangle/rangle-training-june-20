import { ToDoService } from './to-do.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { TitlecasePipe } from './titlecase.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    GenericInputComponent,
    TitlecasePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    ToDoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
