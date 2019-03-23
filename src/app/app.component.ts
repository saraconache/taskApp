import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskApp';
  

  // newTaskName = '';
  newTask = {
    title : 'Clean',
    description: 'House choress today',
    status: 'planning',
    time: 5
  };

  taskList = [this.newTask];

  addTask(titleTask, description, status, time) {
    class Task {
      title = '';
      description = '';
      status ='';
      time =null;
    
      constructor(titleTask, description, status, time) {
        this.title = titleTask;
        this.description = description;
        this.status = status;
        this.time = time;
      }
    }
    
    let createTask = new Task(titleTask, description, status, time);
    this.taskList.push(createTask);
  }
}