import { HttpException, HttpStatus, Type } from '@nestjs/common';
import { IBaseService } from './i.base.service';
import { IBaseRepository } from 'src/repository/base/i.base.repository';
export class BaseService<T extends any, R extends IBaseRepository<T>>
  implements IBaseService<T>
{
  protected readonly repository: R;
  constructor(repository: R) {
    this.repository = repository;
  }
    async findAll(params: any): Promise<any> {
        return await this.repository.findAll(params);
    }
    async findOne(params: any): Promise<T> {
        return await this.repository.findOne(params);
    }
    async store(data: any): Promise<T> {
        return await this.repository.store(data);
    }
    async update(params: any): Promise<T> {
        return await this.repository.update(params);
    }
    async delete(params: any): Promise<T> {
      //example for handling error:
      try {
        return await this.repository.delete(params);
      } catch (error) {
        throw new HttpException(error, HttpStatus.CONFLICT)
      }
    }
}
