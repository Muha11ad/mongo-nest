import { Module } from '@nestjs/common';
import { UserSchema } from './user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{ name: UserModule.name, schema: UserSchema }]),
  ],
})
export class UserModule {}
