import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfilesService {
    create(createProfileDto: CreateProfileDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProfileDto: UpdateProfileDto): string;
    remove(id: number): string;
}
