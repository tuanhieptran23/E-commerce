import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserDTO } from '../dto/register-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDTO } from '../dto/login-user.dto';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() userDto: UserDTO) {
    return this.userService.register(userDto);
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  login(@Body() LoginUserDTO: LoginUserDTO): Promise<any> {
    return this.userService.login(LoginUserDTO);
  }

  @Post('refresh_token')
  refreshToken(@Body() { refresh_token }): Promise<any> {
    return this.userService.refreshToken(refresh_token);
  }
}
