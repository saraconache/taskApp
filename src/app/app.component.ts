import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskApp';
  

  // task object default example
  newTask = {
    title : 'Clean Room',
    description: 'Must finish house chores.',
    status: 'Planning',
    time: '5:31'
  };

  // array of tasks
  taskList = [this.newTask];

  addTask(titleTask, description, status, time) {
    class Task {
      id = '';
      title = '';
      description = '';
      status ='';
      time = '';
    
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

  removeTask(currentTask){
// this.taskList
  }





} // end App component