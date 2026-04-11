import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfilesController {
  // Query
  @Get('sunil')
  findAll(@Query('location') location: string) {
    return [{ location }];
  }
  // param id
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return [{ id }];
  // }
  // return single profile
  // it should take an id param and return the object with that id
  @Get(':id')
  findProfile(@Param('id') id: string) {
    return { id };
  }
  // post route practice
  @Post()
  createRoute(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }

  // update
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return {
      id,
      ...updateProfileDto,
    };
  }
  // delete
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    return { id };
  }
}
