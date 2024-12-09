import { UserModel } from '../user.model';

export interface IUserRepository {
  getAll: () => Promise<UserModel[]>;
  getById: (id: number) => Promise<UserModel>;
  create: (user: UserModel) => Promise<UserModel>;
}
