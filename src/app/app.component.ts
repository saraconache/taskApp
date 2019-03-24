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
      title = null;
      description = null;
      status =null;
      time = null;
    
      constructor(titleTask, description, status, time) {
        this.title = titleTask;
        this.description = description;
        this.status = status;
        this.time = time;
      }
    }
    
    let createTask = new Task(titleTask, description, status, time);
    
    if(createTask.title != null){ // prevent adding blank tasks
      this.taskList.push(createTask);
    }
  }

  removeTask(selectedTask, index){
  this.taskList.splice(index, 1);
  }





} // end App component