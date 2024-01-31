import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UserController } from "src/controller/user.controller";
import { PrismaModule } from "src/database/prisma.module";
import { UserRepository } from "src/repository/user.repository";
import { UserService } from "src/services/user.service";

@Module({
  providers: [UserRepository, UserService],
  imports: [PrismaModule],
  exports: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        //Implement middleware here
    }
}