import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserService } from "../user.service";
import { Task } from "./task.model";

@Injectable()
export class TaskService {
  constructor(
    private userService: UserService,

    @InjectModel(Task)
    private taskModel: typeof Task,
  ) { }

  async createTask(task) {
    const isUser = await this.userService.findOneUser(task.userId);
    if (!isUser) {
      throw new BadRequestException('Usuario não existe');
    }
    return await this.taskModel.create(task);
  }

  async findTasks(id: number) {
    return await this.taskModel.findAll({ where: { userId: id } });
  }

  async deleteAllTasks(id: number) {
    return await this.taskModel.destroy({ where: { userId: id } });
  }
}
