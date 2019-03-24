import { Component } from '@angular/core';
import { Task } from './task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskApp';
  
  newTask = new Task();

  
  taskList;  // Fake API service
  constructor(service: TasksService){
    this.taskList = service.getTasks();
  }


  addTask(addTaskToList){ 
    if(this.newTask.title != null){
      this.taskList.push(addTaskToList);
      this.newTask = new Task();
    }
  }

  removeTask(selectedTask, index){
    this.taskList.splice(index, 1);
    }

} // end App component