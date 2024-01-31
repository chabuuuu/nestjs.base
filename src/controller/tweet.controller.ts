import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TweetService } from "src/services/tweet.service";

@Controller()
export class TweetController {
    constructor(
        private readonly tweetService: TweetService
    ) { }
    @Get()
    async getAll() {
        return this.tweetService.findAll({})
    }
    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.tweetService.findOne({ where: {id: Number(id)} });
    }
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.tweetService.delete({ where: {id: Number(id)} });
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() data: any) {
        return await this.tweetService.update({ where: {id: Number(id)}, data: data });
    }
    @Post()
    async cstore(
        @Body()
        data: any,
    ) {
        return await this.tweetService.store({ data });
    }

}