import User from '../models/user';

const getUser = (id: number) => {
  return User.findByPk(id);
};

const getUserList = () => {
  return User.findAll();
};

const createUser = async (name: string, balance: number): Promise<User> => {
  return User.create({ name, balance });
};

export const UserService = {
  getUser,
  createUser,
  getUserList,
};
