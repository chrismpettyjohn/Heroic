import { Request, Response } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SecurityMiddleware implements NestMiddleware {


  use(req: Request, res: Response, next: Function) {
    console.log('Request...');
    next();
  }

}
