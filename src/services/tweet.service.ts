import { Injectable } from "@nestjs/common";
import { BaseService } from "./base/base.service";
import { Tweet } from "@prisma/client";
import { TweetRepository } from "src/repository/tweet.repository";

@Injectable()
export class TweetService extends BaseService<Tweet, TweetRepository>{
    constructor(
        repository: TweetRepository,
    ){
        super(repository)
    }
    findAll(params: any): Promise<any> {
        try {
            return super.findAll(params);
        } catch (error) {
            throw error
        }
    }
    findOne(params: any): Promise<Tweet> {
        try {
            return super.findOne(params);
        } catch (error) {
            throw error
        }
    }
    store(data: any): Promise<Tweet> {
        try {
            return super.store(data);
        } catch (error) {
            throw error
        }
    }
    update(params: any): Promise<Tweet> {
        try {
            return super.update(params);
        } catch (error) {
            throw error
        }
    }
    delete(params: any): Promise<Tweet> {
        try {
            return super.delete(params);
        } catch (error) {
            throw error
        }
    }
}