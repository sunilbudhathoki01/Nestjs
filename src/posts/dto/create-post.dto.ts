import { IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @MinLength(3)
  @IsString()
  title!: string;

  @MinLength(10)
  @IsString()
  content!: string;
}
