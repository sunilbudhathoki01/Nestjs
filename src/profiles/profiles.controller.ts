import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
import { ProfilesGuard } from './profiles.guard';
@Controller('profile')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  // simple get data
  @Get()
  findData() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  findOneData(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profilesService.findOne(id);
  }
  // Query
  // @Get('sunil')
  // findAll(@Query('location') location: string) {
  //   return [{ location }];
  // }
  // param id
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return [{ id }];
  // }
  // return single profile
  // it should take an id param and return the object with that id
  // @Get(':id')
  // findProfile(@Param('id') id: string) {
  //   return { id };
  // }
  // post route practice
  // @Post()
  // createRoute(@Body() createProfileDto: CreateProfileDto) {
  //   return {
  //     name: createProfileDto.name,
  //     description: createProfileDto.description,
  //   };
  // }

  // post the data
  @Post()
  createProfile(@Body() createProfileDto: CreateProfileDto) {
    const profile = this.profilesService.createProfile(createProfileDto);
    return profile;
  }

  // update
  @Patch(':id')
  updateProfile(
    @Param('id') id: string,
    @Body() updatateProfileDto: UpdateProfileDto,
  ) {
    try {
      return this.profilesService.updateProfile(id, updatateProfileDto);
    } catch (error) {
      throw new NotFoundException((error as Error).message);
    }
  }
  // delete
  @Delete(':id')
  @UseGuards(ProfilesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    return this.profilesService.deleteProfile(id);
  }
}
