import { User } from '@and-open/gifts/core';
import { usersUrl } from './api.config';

export const getUsers = (): Promise<User[]> =>
  fetch(usersUrl)
    .then((response) => response.json())
    .then((response) => response.users);
