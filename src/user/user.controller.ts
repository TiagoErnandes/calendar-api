import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {

  }
  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    console.log(createUser);
    return this.userService.createUser(createUser);
  }
  @Put(":id")
  updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id: number) {
    return this.userService.updateUser(+id, updateUserDto);
  }
  @Get()
  async findUser(@Query() FindUserDto: FindUserDto): Promise<User[]> {
    return await this.userService.findUsers(FindUserDto);
  }
  @Delete(":id")
  async deleteUser(@Param("id") id: string): Promise<any> {
    return await this.userService.deleteUser(id);
  }
}
