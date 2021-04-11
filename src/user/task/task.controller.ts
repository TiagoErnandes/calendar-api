import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Controller('users/:id/tasks')
export class TaskController {

  constructor(private taskController: TaskService) {
  }
  @Get()
  findTasks(@Param('id') id: number) {
    return this.taskController.findTasks(+id);
  }

  @Post()
  createTask(@Body() task: Task, @Param('id') id: number) {
    const newTask = { "userId": +id, ...task }
    return this.taskController.createTask(newTask);
  }
  @Delete()
  deleteAllTask(@Param('id') id: number) {
    return this.taskController.deleteAllTasks(+id);
  }

}
