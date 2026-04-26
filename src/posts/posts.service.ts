import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private postRepo: Repository<Post>) {}
  async create(userId: string, dto: CreatePostDto): Promise<Post> {
    const post = this.postRepo.create({
      ...dto,
      user: { id: userId },
    });
    return this.postRepo.save(post);
  }

  //     return this.postRepo.findOne({
  //       where: { id: saved.id },
  //       relations: { user: true },
  //     }) as Promise<Post>;
  //   }
  async findAllByUser(userId: string): Promise<Post[]> {
    return this.postRepo.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }
  async remove(id: string): Promise<void> {
    const post = await this.postRepo.findOneBy({ id });
    if (!post) throw new NotFoundException(`user with the id ${id} not found`);
    await this.postRepo.delete(id);
  }
}
