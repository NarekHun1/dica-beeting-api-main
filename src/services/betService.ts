import Bet from '../models/bet';
import User from '../models/user';
import { Op, Sequelize } from 'sequelize';

const getBet = (id: number) => {
  return Bet.findByPk(id);
};

const getBetList = () => {
  return Bet.findAll();
};

const getBestBetPerUser = async (limit: number): Promise<Bet[]> => {
  return Bet.findAll({
    where: {
      [Op.and]: [
        Sequelize.literal(`"Bet"."id" = (
          SELECT id FROM Bets AS b
          WHERE b."userId" = "Bet"."userId"
          ORDER BY b.payout DESC
          LIMIT 1
        )`),
      ],
    },
    order: [['payout', 'DESC']],
    limit: limit,
  });
};

const createBet = async (userId: number, betAmount: number, chance: number) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error('User not found.');
  }

  const win = Math.random() < chance;
  const payout = win ? betAmount / chance : 0;
  user.balance += payout - betAmount;
  await user.save();

  return Bet.create({
    userId: userId,
    betAmount: betAmount,
    chance: chance,
    payout: payout,
    win: win,
  });
};

export const BetService = {
  getBet,
  getBetList,
  getBestBetPerUser,
  createBet,
};
