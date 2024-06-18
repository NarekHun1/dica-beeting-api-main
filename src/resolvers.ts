import { UserService } from './services/userService';
import { BetService } from './services/betService';
import {
  GetUserIdArgs,
  CreateBetArgs,
  CreateUserArgs,
  GetBestBetPerUserArgs,
} from './types/resolverArgs';

interface ResolversType {
  Query: {
    getUser(
      _: void,
      args: GetUserIdArgs,
    ): ReturnType<typeof UserService.getUser>;
    getUserList(): ReturnType<typeof UserService.getUserList>;
    getBet(_: void, args: GetUserIdArgs): ReturnType<typeof BetService.getBet>;
    getBetList(): ReturnType<typeof BetService.getBetList>;
    getBestBetPerUser(
      _: void,
      args: GetBestBetPerUserArgs,
    ): ReturnType<typeof BetService.getBestBetPerUser>;
  };
  Mutation: {
    createBet(
      _: void,
      args: CreateBetArgs,
    ): ReturnType<typeof BetService.createBet>;
    createUser(
      _: void,
      args: CreateUserArgs,
    ): ReturnType<typeof UserService.createUser>;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const resolvers: ResolversType = {
  Query: {
    getUser: (_, args) => UserService.getUser(args.id),
    getUserList: () => UserService.getUserList(),
    getBet: (_, args) => BetService.getBet(args.id),
    getBetList: () => BetService.getBetList(),
    getBestBetPerUser: (_, args) => BetService.getBestBetPerUser(args.limit),
  },
  Mutation: {
    createBet: (_, args) =>
      BetService.createBet(args.userId, args.betAmount, args.chance),
    createUser: (_, args) => UserService.createUser(args.name, args.balance),
  },
};
