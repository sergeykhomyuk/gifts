import { GiftsFilter, User } from './models';

export const filterUsers = (
  users: User[],
  { minimalSpend, region, gender }: GiftsFilter
): User[] =>
  users.filter((user) => {
    if (user.spend < (minimalSpend ?? 0)) {
      return false;
    }

    if (region && user.region !== region) {
      return false;
    }

    if (gender && user.gender !== gender) {
      return false;
    }

    return true;
  });
