import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskApp';
  

  newTaskName = '';
 
  taskOne = {
    title : 'clean bathroom',
    description: 'clean up day',
    status: 'in-progress',
    time: 0
  };
  
  taskTwo= {
    title : 'finish essay',
    description: 'production company',
    status: 'completed',
    time: 0
  };
  taskThree = {
    title : 'do yoga',
    description: 'go tot he par',
    status: 'planning',
    time: 0
  };

  taskList = [ this.taskOne, this.taskTwo, this.taskThree];

  addTask(item) {
    this.taskList.push(item);
    this.newTaskName = '';
  }
}