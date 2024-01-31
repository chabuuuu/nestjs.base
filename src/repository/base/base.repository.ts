import { IBaseRepository } from "./i.base.repository";

export class BaseRepository implements IBaseRepository<any> {
  protected _model;

  constructor(model: any) {
    this._model = model;
  }
  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: any;
    where?: any;
    orderBy?: any;
  }): Promise<any> {
    const { skip, take, cursor, where, orderBy } = params;

    return await this._model.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  async findOne(params: {
    where?: any;
  }): Promise<any> {
    const { where } = params;

    return await this._model.findUnique({
      where,
    });
  }
  async store(params: { data: any }): Promise<any> {
    const { data } = params;
    return this._model.create({ data });
  }
  async update(params: {
    where: any;
    data: any;
  }): Promise<any> {
    const { where, data } = params;
    return this._model.update({ where, data });
  }
  delete(params: {
    where: any;
  }): Promise<any> {
    const { where } = params;
    return this._model.delete({ where });
  }
}