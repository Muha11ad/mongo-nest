import { Model } from 'mongoose';
import { UserModel } from '../user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUserRepository } from './user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userModel: Model<UserModel>,
  ) {}
  async getAll(): Promise<UserModel[]> {
    return await this.userModel.find().exec();
  }
  async getById(id: number): Promise<UserModel> {
    return await this.userModel.findById(id).exec();
  }
  async create(user: UserModel): Promise<UserModel> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }
}
