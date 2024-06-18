export interface GetUserIdArgs {
  id: number;
}

export interface CreateBetArgs {
  userId: number;
  betAmount: number
  chance: number;
}

export interface GetBestBetPerUserArgs {
  limit: number;
}

export interface CreateUserArgs {
  name: string;
  balance: number;
}
