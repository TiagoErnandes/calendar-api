import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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
}
