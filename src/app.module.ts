import { Module } from '@nestjs/common/decorators';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user/entities/user.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '123',
          database: 'music-for-play',
          entities: [User],
          synchronize: true,
      }),
      UserModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
