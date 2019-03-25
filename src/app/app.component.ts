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

  // taskList;  // Fake API service
  // constructor(service: TasksService){
  //   this.taskList = service.getTasks();
  //   }

  taskList = [{
    title : 'House chores',
    description: 'Sunday chores: do laundry.',
    status: 'Completed',
    timeHour: 2,
    timeMin: 32},
    { title : 'Finish Essay',
    description: 'Work on document found in Onedrive.',
    status: 'In-Progress',
    timeHour: 10,
    timeMin: 15},
    { title : 'Do Yoga',
    description: 'Go to yoga class in park.',
    status: 'Planning',
    timeHour: 1,
    timeMin: 0}
  ];


  addTask(addTaskToList){ 
    if(this.newTask.title != null){
      this.taskList.push(addTaskToList);
      this.newTask = new Task();
    }
  }

  removeTask(selectedTask, index){
    this.taskList.splice(index, 1);
    }

  getTotalHours(keyword) {
    let sum = 0;
    for (let i = 0; i < this.taskList.length; i++) {
        if (this.taskList[i].status == keyword) {
          sum+= this.taskList[i].timeHour;
        }
    }
    return sum;
  }
  getTotalMinutes(keyword) {
    let sum = 0;
    for (let i = 0; i < this.taskList.length; i++) {
        if (this.taskList[i].status == keyword) {
          sum+= this.taskList[i].timeMin;
        }
    }
    return sum;
  }


} // end App component