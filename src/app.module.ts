import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { ProfileController } from './profile/profile.controller';

@Module({
  imports: [ProfilesModule],
  controllers: [AppController, ProfileController],
  providers: [AppService],
})
export class AppModule {}
