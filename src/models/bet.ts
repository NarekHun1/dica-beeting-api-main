import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db/database';

class Bet extends Model {
  public id!: number;
  public userId!: number;
  public betAmount!: number;
  public chance!: number;
  public payout!: number;
  public win!: boolean;
}

Bet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    betAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    chance: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    payout: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    win: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'bets',
    sequelize: sequelize,
  },
);

export default Bet;
