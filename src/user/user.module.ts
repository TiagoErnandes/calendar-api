import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist';
import { User } from './user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TaskModule } from './task/task.module';


@Module({
  imports: [forwardRef(() => TaskModule), SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
