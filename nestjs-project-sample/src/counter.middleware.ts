import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class CounterMiddleware implements NestMiddleware {
  private static counter = 0;

  use(req: Request, res: Response, next: NextFunction) {
    CounterMiddleware.counter++;
    console.log('Request... Total Counter:', CounterMiddleware.counter);
    next();
  }

  static getCounter() {
    return CounterMiddleware.counter;
  }
}
