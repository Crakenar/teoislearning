import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! s';
  }
}
