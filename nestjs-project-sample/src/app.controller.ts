import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { CounterMiddleware } from './counter.middleware';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello/:name')
  getHelloName(@Param('name') name: string): string {
    return this.appService.getHelloName(name);
  }

  @Post('hello')
  getHelloBody(@Body() body: any): string {
    return this.appService.getHelloBody(body);
  }

  @Get('user')
  getUser(): ReturnType<UserService['getUser']> {
    return this.userService.getUser();
  }

  @Get('counter')
  getCounter(): string {
    return `Total Counter: ${CounterMiddleware.getCounter()}`;
  }
}
