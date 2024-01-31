import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { UserService } from "src/services/user.service";

@Controller()
export class UserController{
    constructor(
        private readonly userService: UserService
    ){}
    @Get()
    getAll(){
        return this.userService.findAll({})
    }
    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.userService.findOne({ where: {id: Number(id) }});
    }
    @Delete(':id')
    async delete(@Param('id') id: string) {
        try {
            return await this.userService.delete({ where: {id: Number(id)} });
        } catch (error) {
            throw error
        }
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() data: any) {
        try {
            return await this.userService.update({ where: {id: Number(id)}, data: data });
        } catch (error) {
            throw error
        }
    }
    @Post()
    async cstore(
        @Body()
        data: any,
    ) {
        try {
            return await this.userService.store({ data });
        } catch (error) {
            throw error
        }
    }
}