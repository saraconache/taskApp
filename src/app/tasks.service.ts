import { Injectable } from '@angular/core';
@Injectable()

export class TasksService{
    getTasks(){ // Fake API
       return [{
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
    }
}