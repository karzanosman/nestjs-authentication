import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UesrsService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      username: 'jdoe',
      password: '123',
    },
    {
      id: 2,
      name: 'Jane Doe',
      username: 'jane',
      password: '123',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
  
}
