import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { randomUUID } from 'crypto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profile = [
    {
      id: randomUUID(),
      name: 'sijosjdsjodjso',
      description: 'kdowkowkk',
    },
    {
      id: randomUUID(),
      name: 'ndjhjidjkpokd',
      description:
        'hdf d t rf efjirf c rej rioejroi c rejijr c rjoeijro reorjwc uojf jd e fdhof u',
    },
    {
      id: randomUUID(),
      name: 'jdkhfdkejf',
      description: 'kdowkowkk jdij joiej jeojo jodjo djosjd ',
    },
  ];
  createProfile(createProfileDto: CreateProfileDto) {
    const newprofile = {
      id: randomUUID(),
      ...createProfileDto,
    };
    this.profile.push(newprofile);
    return newprofile;
  }
  findAll() {
    return this.profile;
  }

  findOne(id: string) {
    return this.profile.find((profile) => profile.id == id);
  }
  updateProfile(id: string, updateProfileDto: UpdateProfileDto) {
    const matchingProfile = this.profile.find(
      (existingProfile) => existingProfile.id == id,
    );
    if (!matchingProfile) {
      return {};
    }
    matchingProfile.name = updateProfileDto.name;
    matchingProfile.description = updateProfileDto.description;
    return matchingProfile;
  }
  deleteProfile(id: string) {
    const matchingProfile = this.profile.find(
      (existingProfile) => existingProfile.id == id,
    );

    if (!matchingProfile) {
      return { message: 'Profile not found' };
    }

    this.profile = this.profile.filter((pro) => pro.id !== id);
    console.log(`Profile with id ${id} deleted successfully`);
    return { message: 'deleted successfully', deleted: matchingProfile };
  }
}
