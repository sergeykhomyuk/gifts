import { Express } from 'express';
import * as faker from 'faker';
import { genders, maxSpendAmount, regions, User } from '@and-open/gifts/core';

export function addUsersRoutes(app: Express) {
  app.get('/api/users', (request, response) => {
    const users: User[] = [];

    for (
      let id = 0;
      id < faker.datatype.number({ min: 1000, max: 2000 });
      id++
    ) {
      users.push(getFakeUser(id.toString()));
    }

    response.json({ users });
  });
}

function getFakeUser(id: string): User {
  const user = {
    id,
    birthday: faker.datatype.number({ min: 1, max: 12 }),
    region: faker.random.arrayElement(regions),
    gender: faker.random.arrayElement(genders),
    spend: faker.datatype.number({ min: 0, max: maxSpendAmount }),
  };

  return user;
}
