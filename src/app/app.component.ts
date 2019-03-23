import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskApp';
  newTaskName = '';
  tasks = [];

  addTask(item) {
    this.tasks.push(item);
    this.newTaskName = '';
  }
}

