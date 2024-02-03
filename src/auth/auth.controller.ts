import { AuthService } from './auth.service';
import { Controller, Post, Get, Body, ValidationPipe } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {


    constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(new ValidationPipe()) signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

//   @Get('/login')
//   login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
//     return this.authService.login(loginDto);
//   }

}
