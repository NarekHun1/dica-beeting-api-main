import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db/database';

class User extends Model {
  public id!: number;
  public name!: string;
  public balance!: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    balance: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
  },
  {
    tableName: 'users',
    sequelize: sequelize,
  },
);

export default User;
