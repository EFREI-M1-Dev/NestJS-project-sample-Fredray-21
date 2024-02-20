import { Injectable } from '@nestjs/common';

interface User {
  name: string;
  age: number;
}

@Injectable()
export class UserService {
  getUser(): User {
    return { name: 'John Doe', age: 30 };
  }
}
