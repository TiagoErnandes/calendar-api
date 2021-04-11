import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Task } from "./task.model";

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task)
    private userModel: typeof Task,
  ) { }

  async createTask(task) {
    try {
      return await this.userModel.create(task);
    } catch (error) {
      return `user not found for task ${error}`;
    }
  }

  async findTasks(id: number) {
    return await this.userModel.findAll({ where: { userId: id } });
  }

  async deleteAllTasks(id: number) {
    return await this.userModel.destroy({ where: { userId: id } });
  }
}
