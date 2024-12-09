import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class UserModel extends Document {
  @Prop({ required: true, unique: true })
  telegram_id: string;

  @Prop()
  userName?: string;

  @Prop()
  name?: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
