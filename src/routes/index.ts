import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { TweetModule } from 'src/module/tweet.module';
import { UserModule } from 'src/module/user.module';
const main_route = 'api/v1';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TweetModule,
    RouterModule.register([
      {
        path: `${main_route}/tweet`,
        module: TweetModule,
      },
    ]),
    UserModule,
    RouterModule.register([
      {
        path: `${main_route}/user`,
        module: UserModule,
      },
    ])
],
})
export class AppModule {}
