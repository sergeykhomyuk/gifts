import { giftCost } from './gifts.config';
import { User } from './models';

export const initialGiftsCostsByMonth = new Array(12).fill(0);

export const getGiftsCostsByMonth = (users: User[]): number[] =>
  users.reduce(
    (result, user) => {
      result[user.birthday - 1] += giftCost;
      return result;
    },
    [...initialGiftsCostsByMonth]
  );
