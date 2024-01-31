import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TweetController } from "src/controller/tweet.controller";
import { PrismaModule } from "src/database/prisma.module";
import { TweetRepository } from "src/repository/tweet.repository";
import { TweetService } from "src/services/tweet.service";

@Module({
  providers: [TweetRepository, TweetService],
  imports: [PrismaModule],
  exports: [TweetService, TweetRepository],
  controllers: [TweetController],
})
export class TweetModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      //Implement middleware here
    //example:
    // consumer
    //   .apply(authenticateJWT, CompressJson)
    //   .exclude(
    //     { path: 'api/v1/tweet', method: RequestMethod.POST },
    //   )
    //   .forRoutes(TweetController);
    // }
    }
}