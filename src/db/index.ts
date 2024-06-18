import { sequelize } from './database';
import '../models/user';
import '../models/bet';
import '../models/associations';

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      'Connection to the database has been established successfully.',
    );
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export const syncModels = async () => {
  await sequelize.sync({ alter: false, force: true });
};
