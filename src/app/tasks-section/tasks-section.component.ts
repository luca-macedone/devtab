import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

interface Task {
  name: string,
  isDone: boolean,
  checklist: { text: string, done: boolean }[]
}

@Component({
  selector: 'app-tasks-section',
  templateUrl: './tasks-section.component.html',
  styleUrl: './tasks-section.component.scss'
})
export class TasksSectionComponent implements OnInit {
  localTasks: any;

  tasks: Task[] = []
  taskModel: Task = {
    name: '',
    isDone: false,
    checklist: []
  }
  checklistItemModel: string = "";
  isChecklistEnabled: boolean = false;

  ngOnInit(): void {
    this.localTasks = this.localStorageService.getItem('taskList');
    if (this.localTasks != null) {
      this.tasks = this.localTasks;
    }
  }

  constructor(private localStorageService: LocalStorageService) { }

  newTask() {
    // console.log('click')
    // console.log(this.taskModel.name)
    let { name, isDone, checklist } = this.taskModel
    let tempTask: Task = { name: name, isDone: isDone, checklist: checklist }
    // console.log(tempTask.name)
    this.tasks.push(tempTask)
    this.resetInputs()
    this.localStorageService.updateItem('taskList', this.tasks);
    // console.log(this.tasks)
  }

  pushChecklistItem() {
    if (this.checklistItemModel.length > 0 && this.isChecklistEnabled) {
      this.taskModel.checklist.push({ text: this.checklistItemModel, done: false });

      this.checklistItemModel = "";
    }
  }

  removeTask(index: number) {
    this.tasks[index].isDone = true
    setTimeout(() => {

      this.tasks.splice(index, 1);
      this.localStorageService.updateItem('taskList', this.tasks);

    }, 1500)
  }

  resetInputs() {
    this.isChecklistEnabled = false;
    this.taskModel.name = "";
    this.taskModel.isDone = false;
    this.taskModel.checklist = [];
    this.checklistItemModel = "";
  }

  changeChecklistItemStatus(item: number, task: number) {
    console.log(this.tasks[item].checklist[task])
    let temp = this.tasks[item].checklist[task].done;
    this.tasks[item].checklist[task].done = !temp;
    console.log(this.tasks[item].checklist[task])

    this.localStorageService.updateItem('taskList', this.tasks);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.localStorageService.updateItem('taskList', this.tasks);
    }
  }
}
