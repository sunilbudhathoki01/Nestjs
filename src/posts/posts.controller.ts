import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('user/:userId/posts')
export class PostsController {
  constructor(private postService: PostsService) {}
  @Post()
  create(@Param('userId') userId: string, @Body() dto: CreatePostDto) {
    return this.postService.create(userId, dto);
  }
  @Get()
  findAll(@Param('userId') userId: string) {
    return this.postService.findAllByUser(userId);
  }

  @Delete(':id')
  delete(@Param('id') Id: string) {
    return this.postService.remove(Id);
  }
}
