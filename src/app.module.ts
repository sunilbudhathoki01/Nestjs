import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { ProfileController } from './profile/profile.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [ProfilesModule],
  controllers: [AppController, ProfileController],
  providers: [AppService, AuthService],
})
export class AppModule {}
