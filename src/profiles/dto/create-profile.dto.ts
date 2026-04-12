import { IsString, Length } from 'class-validator';
import { RandomUUIDOptions } from 'crypto';

export class CreateProfileDto {
  @IsString()
  @Length(3, 80)
  name!: string;
  @IsString()
  @Length(10, 200)
  description!: string;
}
