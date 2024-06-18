import Bet from './bet';
import User from './user';

User.hasMany(Bet, {
  sourceKey: 'id',
  foreignKey: 'userId',
  as: 'bets',
});

Bet.belongsTo(User, { foreignKey: 'userId', as: 'user' });
