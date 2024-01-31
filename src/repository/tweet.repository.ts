import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./base/base.repository";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class TweetRepository extends BaseRepository{
    constructor(
        private prisma: PrismaService
    ){
        super(prisma.tweet)
    }
}  