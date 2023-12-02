import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

interface Task {
  name: string,
  isDone: boolean
}

@Component({
  selector: 'app-tasks-section',
  templateUrl: './tasks-section.component.html',
  styleUrl: './tasks-section.component.scss'
})
export class TasksSectionComponent {
  localTasks = this.localStorageService.getItem('taskList')

  tasks: Task[] = this.localTasks ? this.localTasks : []
  taskModel: Task = {
    name: '',
    isDone: false,
  }

  constructor(private localStorageService: LocalStorageService) { }

  newTask() {
    // console.log('click')
    // console.log(this.taskModel.name)
    let { name, isDone } = this.taskModel
    let tempTask: Task = { name: name, isDone: isDone }
    // console.log(tempTask.name)
    this.tasks.push(tempTask)
    this.taskModel.name = ''
    this.localStorageService.removeItem('taskList')
    this.localStorageService.setItem('taskList', this.tasks)
    // console.log(this.tasks)
  }

  removeTask(index: number) {
    this.tasks[index].isDone = true
    setTimeout(() => {

      this.tasks.splice(index, 1);
      this.localStorageService.removeItem('taskList')
      this.localStorageService.setItem('taskList', this.tasks)

    }, 1500)
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.localStorageService.removeItem('taskList')
      this.localStorageService.setItem('taskList', this.tasks)
    }
  }
}
