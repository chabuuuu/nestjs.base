import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { BaseService } from "./base/base.service";
import { User } from "@prisma/client";
import { UserRepository } from "src/repository/user.repository";

@Injectable()
export class UserService extends BaseService<User, UserRepository>{
    constructor(
        repository: UserRepository,
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
    async findOne(params: any): Promise<User> {
        try {
            const respond = await super.findOne(params);
            //exmaple in handling error:            
            if (respond == null){
                throw new HttpException('User not found', HttpStatus.NOT_FOUND)
            }
            return respond
        } catch (error) {
            throw error
        }
    }
    store(data: any): Promise<User> {
        try {
            return super.store(data);
        } catch (error) {
            throw error
        }
    }
    update(params: any): Promise<User> {
        try {
            return super.update(params);
        } catch (error) {
            throw error
        }
    }
    async delete(params: any): Promise<User> {
        try {
            const respond = await super.delete(params);
            return respond
        } catch (error) {
            console.log("error", error);
            
            throw error
        }
    }
}