import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    create(createProfileDto: CreateProfileDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProfileDto: UpdateProfileDto): string;
    remove(id: string): string;
}
