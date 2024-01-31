import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./base/base.repository";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class UserRepository extends BaseRepository{
    constructor(
        private prisma: PrismaService
    ){
        super(prisma.user)
    }
}  