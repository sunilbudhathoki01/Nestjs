import { Controller, Get, Query } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
  @Get('alldata')
  findAll(@Query('age') age: number) {
    // return 'hello world sunil vai k xa';
    return [{ age }];
  }
}
