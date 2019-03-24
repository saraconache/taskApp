import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskApp';  
  newTask = new Task();

   // array of tasks with default task
   taskList = [{
    title : 'Clean Room',
    description: 'Must finish house chores.',
    status: 'Planning',
    time: '5:31'
  }];

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