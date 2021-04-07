import { IsNumberString, IsString, Length } from "class-validator";

export class UpdateUserDto {
  @IsString()
  name: string;

  @IsNumberString()
  @Length(11, 11, { message: 'O telefone deve ter o formato correto' })
  phone: string;
}