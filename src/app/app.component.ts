import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskApp';
  
  newTask = {
    title: '',
    description: '',
    status: '',
    time: ''
  }

  // array of tasks
  taskList = [{
    title : 'Clean Room',
    description: 'Must finish house chores.',
    status: 'Planning',
    time: '5:31'
  }];

  addTask(titleTask, description, status, time) {
    
    let createTask = new Task(titleTask, description, status, time);
    
    if(createTask.title != null){
      this.taskList.push(createTask);
    }
  }

  removeTask(selectedTask, index){
  this.taskList.splice(index, 1);
  }





} // end App component